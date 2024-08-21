import { Box, Button, Chip } from "@mui/material";
import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Switch from "@mui/material/Switch";
import ConfirmDialogBox from "../../components/ConfirmDialogBox/ConfirmDialogBox.js";
import SingleImageView from "../../components/SingleImageView/SingleImageView.js";
import { globalFormatDate } from "../../utils/formatTime.js";
import { getAllVendorsDataThunk, updateVendorStatusThunk } from "../../store/slices/vendor/vendor.slice.js";

const Vendor = () => {
  const dispatch = useDispatch();
  const { vendor, totalCount } = useSelector(({ vendor }) => vendor?.vendordata);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();


  //--------------- For Pagination starts here --------------------------
  const [page, setPage] = useState(0);  // Pages are zero-indexed
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    dispatch(getAllVendorsDataThunk({ page, pageSize }));
  }, [page, pageSize, dispatch]);

  //--------------- For Pagination ends here--------------------------



  const handleView = (id) => {
    navigate(`/dashboard/vendors/${id}`)
  };


  const columns = [
    { field: "_id", headerName: "ID", flex: 0.5 },
    {
      field: "fullName",
      headerName: "Name",
      flex: 1,
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "mobile",
      headerName: "Mobile No",
      flex: 1,
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "gstNumber",
      headerName: "GST Number",
      flex: 1,
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "displayName",
      headerName: "Display Name",
      flex: 1,
      width: 150,
      cellClassName: "name-column--cell",
    },

    {
      field: "city",
      headerName: "City",
      flex: 1,
      cellClassName: "name-column--cell",
      valueGetter: (params) => params?.row?.pickUpAddress?.[0]?.city,
    },
    

    {
      field: "state",
      headerName: "State",
      flex: 1,
      cellClassName: "name-column--cell",
      valueGetter: (params) => params?.row?.pickUpAddress?.[0]?.state,
    },
    

    {
      field: "pinCode",
      headerName: "Pin Code ",
      flex: 1,
      cellClassName: "name-column--cell",
      valueGetter: (params) => params?.row?.pickUpAddress?.[0]?.pinCode,
    },
    {
      field: "approvalStatus",
      headerName: "Approval Status",
      flex: 2,
      width: 250,
      renderCell: (params) => params.value=="approved"?  <Chip
      label={ params.value}
      sx={{
        fontWeight: "600",
        background: "rgb(229, 245, 238)",
        color: "rgb(39, 172, 112)",
      }}
    /> :

    <Chip
    label={ params.value}
    sx={{
      fontWeight: "600",
      background: "rgb(255, 236, 236)",
      color: "rgb(232, 92, 92)",
    }}
  />
    },
    {
      field: "createdAt",
      headerName: "Created On",
      flex: 1,
      width: 150,
      renderCell: (params) => globalFormatDate(params?.value),
      
    },
    {
      field: "createdBy",
      headerName: "Created By",
      flex: 1,
      width: 150,
      renderCell: (params) => params?.value?.fullName,
    },
    {
      field: "updatedAt",
      headerName: "Updated On",
      flex: 1,
      width: 150,
      renderCell: (params) => globalFormatDate(params?.value),
    },
    {
      field: "updatedBy",
      headerName: "Updated By",
      flex: 1,
      width: 150,
      renderCell: (params) => params?.value?.fullName,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<VisibilityIcon />}
          label="Delete"
          onClick={() => handleView(params.id)}
          // showInMenu
        />,
      ],
    },
  ];


  return (
    <Box p={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Vendors" subtitle="Manage Vendors" />

       
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
          rows={vendor}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          pagination
          page={page}
          onPageChange={(newPage) => setPage(newPage)}
          rowCount={totalCount} // Pass the total number of categories
          paginationMode="server" // Server-side pagination
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Vendor;
