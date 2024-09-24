import { Box, Button, Chip } from "@mui/material";
import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { globalFormatDate } from "../../utils/formatTime.js";
import BottomDrawerVendor from "../bottomdrawervendor/BottomDrawerVendor.js";
import FilterListIcon from "@mui/icons-material/FilterList";
import { getAllClientsDataThunk } from "../../store/slices/client/client.slice.js";

const Client = () => {
  const dispatch = useDispatch();
  const { client, totalCount } = useSelector(({ client }) => client?.clientdata);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [isBottomDrawer, setIsBottomDrawer] = useState(false);

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const status = query.get("status");
  const fullName = query.get("fullName");
  const email = query.get("email");
  const city = query.get("city");
  const state = query.get("state");
  const mobile = query.get("mobile");



  //--------------- For Pagination starts here --------------------------
  const [page, setPage] = useState(0);  // Pages are zero-indexed
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    // dispatch(getAllClientsDataThunk({ page, pageSize,status,city,state,email,fullName ,mobile}));
    dispatch(getAllClientsDataThunk({ page, pageSize}));
  }, [page, pageSize, dispatch, status,state,city,email,fullName,mobile]);

  //--------------- For Pagination ends here--------------------------



  const handleView = (id) => {
    navigate(`/dashboard/clients/${id}`)
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
    // {
    //   field: "displayName",
    //   headerName: "Display Name",
    //   flex: 1,
    //   width: 150,
    //   cellClassName: "name-column--cell",
    // },

    // {
    //   field: "city",
    //   headerName: "City",
    //   flex: 1,
    //   cellClassName: "name-column--cell",
    //   valueGetter: (params) => params?.row?.pickUpAddress?.[0]?.city,
    // },
    

    // {
    //   field: "state",
    //   headerName: "State",
    //   flex: 1,
    //   cellClassName: "name-column--cell",
    //   valueGetter: (params) => params?.row?.pickUpAddress?.[0]?.state,
    // },
    

    // {
    //   field: "pinCode",
    //   headerName: "Pin Code ",
    //   flex: 1,
    //   cellClassName: "name-column--cell",
    //   valueGetter: (params) => params?.row?.pickUpAddress?.[0]?.pinCode,
    // },
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
  const toggleBottomDrawer = () => {
    setIsBottomDrawer(false);
  };

  const fncOpenBottomDrawer = () => {
    setIsBottomDrawer(true);
  };


  return (
    <Box p={2}>
      <BottomDrawerVendor
        isBottomDrawer={isBottomDrawer}
        toggleBottomDrawer={toggleBottomDrawer}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Clients" subtitle="Manage Clients" />

       
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
        <Box sx={{display:"flex", justifyContent:"flex-end"}}>
        <Button variant="outlined" onClick={fncOpenBottomDrawer} startIcon={<FilterListIcon />}>
        Filter
        </Button>
        </Box>
        <DataGrid
          getRowId={(row) => row._id}
          rows={client}
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

export default Client;
