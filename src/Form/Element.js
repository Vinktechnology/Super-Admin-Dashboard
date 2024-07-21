import React from "react";
import { inputType } from "../utils/enum";
// import DatePicker from "react-datepicker";
import  {useStyles}  from "./Form.theme";
import DropZone from "../NewForm/DropZone";
import Input from "./Input";
import MuiSelect from "../NewForm/MuiSelect";
import Switch from "./Switch";
import FileInput from "./FileInput";
import CheckboxList from "./CheckBoxGroup";
import SimpleFileInput from "./SimpleFileInput";
import OverviewFileInput from "./OverviewFileInput";
import PasswordInput from "./PasswordInput";
import MuiCKEditor from '../NewForm/MuiCKEditor';
import { Box, TextField ,Container} from "@mui/material";
import { formErrorStyle } from "../utils/constant";
import MuiMultiSelect from "../NewForm/MuiMultiSelect";
import MuiMultiSelectWithAutocomplete from "../NewForm/MuiMultiSelectWithAutocomplete";
import CustomOtpInput from "./CustomOtpInput";
import NumberInput from "./NumberInput";


function Element({
  buyerid,
  eletype,
  label,
  errorText,
  inputProps,
  options,
  value,
  placeholder,
  onChange,
  IsDisable,
  name,
  ...rest
}) {

  
  const {styles} = rest;

  
  const classes = useStyles;
  function renderInput() {
    return (
      <Input
        label={label}
        errorText={errorText}
        inputProps={inputProps}
        value={value}
        IsDisable={IsDisable}
        placeholder={placeholder}
        {...rest}
      />
    );
  }

  function renderNumberInput()
  {
    return (
      <NumberInput
      label={label}
        errorText={errorText}
        inputProps={inputProps}
        value={value}
        IsDisable={IsDisable}
        placeholder={placeholder}
        {...rest}
      />
    )
  }

  function renderPasswordInput() {
    return (
      <PasswordInput
        label={label}
        errorText={errorText}
        inputProps={inputProps}
        value={value}
        placeholder={placeholder}
        {...rest}
      />
    );
  }


  function renderTextarea() {

   
    return (
      <Box sx={styles}>
      <TextField
        label={label}
        multiline
        rows={4}
        fullWidth
        value={value}
        variant="filled"
        sx={{ gridColumn: "span 4" }}
        {...inputProps}
        {...rest}
        placeholder={placeholder}
      />
      {errorText && <span style={formErrorStyle}>{errorText}</span>}
      </Box>
    );
  }

  function renderSelect() {
    return (
      <MuiSelect
        label={label}
        errorText={errorText}
        options={options}
        {...inputProps}
        value={value}
        placeholder={placeholder}
        {...rest}
        styles={styles}
      />
    );
  }

  function renderAutoComplete() {
    return (
      <div className={classes.formGroup}>
        <label className={classes.formLabel}>Give your project name here</label>
        <input className={classes.formControl} type="text" autoComplete="off" />
      </div>
    );
  }
  function renderDatePicker() {
    return (
      <>
        <div className={classes.formGroup}>
          {/* <DatePicker
            className="form-control form-control-lg bg-white bg-opacity-5"
            style={{ zIndex: "1000" }}
            selected={!value ? "" : value}
            dateFormat="dd/MM/yyyy"
            {...inputProps}
            {...rest}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            onChange={(date) => {
              inputProps.onChange({
                target: {
                  name: inputProps.name,
                  value: date,
                },
              });
            }}
            autoComplete="off"
            placeholderText={placeholder}
          />
          {errorText && (
            <span className={classes.formErrorStyle}>{errorText}</span>
          )} */}
        </div>
      </>
    );
  }

  function renderDropZone()
  {
    return(
      <DropZone 
      label={label}
      {...inputProps}
      {...rest}
      errorText={errorText}
      value={value}
      />
    )
  }

  function renderMuiCKEditor()
  {
    return(
      <MuiCKEditor 
      label={label}
      {...inputProps}
      {...rest}
      errorText={errorText}
      value={value}
      />
    )
  }

  function renderAutoCompleteWithSearch()
  {
    return(
      <MuiMultiSelectWithAutocomplete 
      label={label}
      placeholder={placeholder}
      {...inputProps}
      {...rest}
      errorText={errorText}
      value={value}
      />
    )
  }
  function renderMultiSelect()
  {
    return(
      <MuiMultiSelect 
      label={label}
      errorText={errorText}
      options={options}
      {...inputProps}
      value={value}
      placeholder={placeholder}
      {...rest}
      styles={styles}
      />
    )
  }
  

  function renderCheckBoxGroup() {
    return (
      <CheckboxList
        label={label}
        errorText={errorText}
        value={value}
        options={options}
        onChange={onChange}
        name={name}
      />
    );
  }

  function renderOTPForm()
  {
    return (
    <CustomOtpInput
    label={label}
    errorText={errorText}
    {...inputProps}
    value={value}
    placeholder={placeholder}
    {...rest}
    />)
  }
  return (
    <>
    
      {eletype === inputType.otpinput && renderOTPForm()}
      {eletype === inputType.autocompletewithsearch && renderAutoCompleteWithSearch()}
      {eletype === inputType.multiselect && renderMultiSelect()}
      {eletype === inputType.dropzone && renderDropZone()}
      {eletype === inputType.editor && renderMuiCKEditor()}
      {eletype === inputType.input && renderInput()}
      {eletype === inputType.passwordinput && renderPasswordInput()}
      {eletype === inputType.number && renderNumberInput()}
      {eletype === inputType.select && renderSelect()}
      {eletype === inputType.textarea && renderTextarea()}
      {eletype === inputType.autocomplete && renderAutoComplete()}
      {eletype === inputType.date && renderDatePicker()}
      {eletype === inputType.checkboxgroup && renderCheckBoxGroup()}
      {eletype === inputType.switch && (
        <Switch label={label} {...inputProps} {...rest} value={value} />
      )}
      {eletype === inputType.file && (
        <FileInput
        buyerid={buyerid}
          label={label}
          {...inputProps}
          {...rest}
          errorText={errorText}
          value={value}
        />
      )}
      {eletype === inputType.overviewfileinput && (
        <OverviewFileInput
          label={label}
          {...inputProps}
          {...rest}
          errorText={errorText}
          value={value}
        />
      )}
      {eletype === inputType.simplefile && (
        <SimpleFileInput
          label={label}
          {...inputProps}
          {...rest}
          errorText={errorText}
          value={value}
        />
      )}
    </>
  );
}

export default Element;
