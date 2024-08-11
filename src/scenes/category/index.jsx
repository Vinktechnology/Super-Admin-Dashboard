import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllCategoryDataThunk } from "../../store/slices/category/category.slice";
import Switch from "@mui/material/Switch";
import ConfirmDialogBox from "../../components/ConfirmDialogBox/ConfirmDialogBox.js";

const Category = () => {
  const dispatch = useDispatch();
  const { categorydata } = useSelector(({ category }) => category);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  //--------------- For Pagination starts here --------------------------

  useEffect(() => {
    dispatch(getAllCategoryDataThunk());
  }, []);

  //--------------- For Pagination ends here--------------------------

  const handleDelete = (id) => {
    alert(`Edit row with ID: ${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/dashboard/category/addCategory/${id}`);
  };

  const toggleChange = (event, data) => {
    console.log("TOGGLE DATA", event.target.checked, data);
    setOpen(true);
  };

  const columns = [
    { field: "_id", headerName: "ID", flex: 0.5 },
    {
      field: "imageLink",
      headerName: "Image",
      renderCell: (params) => (
        <a download={params.name} href={params.value} title="category">
          <img
            style={{ borderRadius: "50%", height: "50px", width: "50px" }}
            src={params.value}
          />
        </a>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "slug",
      headerName: "Slug",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "isActive",
      headerName: "Is Active",
      flex: 1,
      renderCell: (params) => (
        <Switch
          onChange={(event) => toggleChange(event, params)}
          defaultChecked={params.value}
          color="warning"
        />
      ),
    },
    {
      field: "createdAt",
      headerName: "Created On",
      flex: 1,
    },
    {
      field: "createdBy",
      headerName: "Created By",
      flex: 1,
    },
    {
      field: "updatedAt",
      headerName: "Updated On",
      flex: 1,
    },
    {
      field: "updatedBy",
      headerName: "Updated By",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          onClick={() => handleEdit(params.id)}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => handleDelete(params.id)}
          // showInMenu
        />,
      ],
    },
  ];

  const fncHandleDialog = (isConfirmed) => {
    setOpen(false);
    console.log("Status changed for:", isConfirmed);
    if (isConfirmed) {
      // Add logic to update status in your store or backend
    }
  };
  return (
    <Box p={2}>
      <ConfirmDialogBox
        title="Do you want to change the status?"
        body="If you change the status then it may not be visible to some cases"
        cancel="Cancel"
        confirm="Confirm"
        fncHandleDialog={fncHandleDialog}
        isopen={open}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Category" subtitle="Manage Category" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={() => navigate("/dashboard/category/addcategory")}
          >
            <AddIcon sx={{ mr: "10px" }} />
            Add Category
          </Button>
        </Box>
      </Box>
      <Box
        m="10px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          getRowId={(row) => row._id}
          rows={categorydata}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Category;
