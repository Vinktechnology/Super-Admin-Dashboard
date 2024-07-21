import { Box } from "@mui/material";
import { DataGrid, GridToolbar,GridActionsCellItem } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "mobile", headerName: "Mobile Number" },
    {
      field: "email",
      headerName: "Email Id",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "gstno",
      headerName: "GST No",
      // type: "number",
      // headerAlign: "left",
      // align: "left",
    },
    {
      field: "fullname",
      headerName: "Full Name",
      flex: 1,
    },
    {
      field: "username",
      headerName: "User Name",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Registered Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      type: 'actions',
      getActions: (params) => [
        <GridActionsCellItem
          icon={<ZoomInIcon />}
          label="Edit"
          onClick={() => handleEdit(params.id)}
        />
      ],
    },
  ];


  
  const handleEdit = (id) => {
    // alert(`Edit row with ID: ${id}`);
    navigate(`/dashboard/vendors/${id}`)
    // Implement your edit functionality here
  };

  return (
    <Box m="20px">
      <Header
        title="VENDORS"
        subtitle="Vendors Data"
      />
      <Box
        m="40px 0 0 0"
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
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
