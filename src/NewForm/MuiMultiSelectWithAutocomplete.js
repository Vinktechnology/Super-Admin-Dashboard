import React, { useState, useEffect, useRef } from "react";
import {
  Autocomplete,
  TextField,
  CircularProgress,
  Chip,
  Box,
} from "@mui/material";
import axios from "axios";
import { formErrorStyle } from "../utils/constant";

const MuiMultiSelectWithAutocomplete = ({
  label,
  onChange,
  onBlur,
  name,
  value = "",
  errorText,
  url,
  styles,
  extraArguments = {},
  multiple = false,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const debounceTimerRef = useRef(null);

  // Fetch data function
  const fetchData = async (query) => {
    console.log("Fetching data for query:", query); // Debugging log
    setLoading(true);

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?name_like=${query}`
      );
      console.log("API response:", response.data); // Debugging log
      setOptions(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setOptions([]); // Fallback to empty options on error
    } finally {
      setLoading(false);
    }
  };

  // Initial data fetch or on empty input
  const fetchInitialData = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      console.log("Initial API response:", response.data); // Debugging log
      setOptions(response.data);
    } catch (error) {
      console.error("Error fetching initial data:", error);
      setOptions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetchInitialData();
  }, []);

  // Handle input change with manual debounce
  const handleInputChange = (event, value) => {
    console.log("Input change detected:", value); // Debugging log
    setInputValue(value);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      //   if (value) {
      fetchData(value);
      //   } else {
      //     fetchInitialData();
      //   }
    }, 500);
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  return (
    <Box sx={styles}>
      <Autocomplete
        multiple
        options={options}
        getOptionLabel={(option) => option.name || "Unknown"} // Ensure it returns a string
        filterSelectedOptions
        inputValue={inputValue}
        onInputChange={handleInputChange}
        value={selectedOptions}
        onChange={(event, newValue) => {
          console.log("Selected options changed:", newValue); // Debugging log
          let filteredList = [
            ...new Map(
              newValue.map((obj) => [`${obj.id}:${obj.name}`, obj])
            ).values(),
          ];
          setSelectedOptions(filteredList);
          onChange({
            target: {
              name,
              value: filteredList,
            },
          });
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label={label}
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              key={option.id} // Ensure unique key
              label={option.name}
              {...getTagProps({ index })}
            />
          ))
        }
      />

      {errorText && <span style={formErrorStyle}>{errorText}</span>}
    </Box>
  );
};

export default MuiMultiSelectWithAutocomplete;
