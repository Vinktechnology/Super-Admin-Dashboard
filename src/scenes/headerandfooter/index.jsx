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
import VisibilityIcon from "@mui/icons-material/Visibility";
import Switch from "@mui/material/Switch";
import ConfirmDialogBox from "../../components/ConfirmDialogBox/ConfirmDialogBox.js";
import { globalFormatDate } from "../../utils/formatTime.js";
import { getAllHeaderAndFooterDataThunk, updateHeaderAndFooterStatusThunk } from "../../store/slices/headerfooter/headerfooter.slice.js";

const HeaderAndFooter = () => {
  const dispatch = useDispatch();


  const { headerandfooter, totalCount } = useSelector(({ headerfooter }) => headerfooter?.headerandfooterdata);

  console.log("headerandfooter",headerandfooter)
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [toggleDATA, setToggleData] = useState(null);
  const [switchChecked, setSwitchChecked] = useState({}); // Keep track of switch states


  //--------------- For Pagination starts here --------------------------
  const [page, setPage] = useState(0);  // Pages are zero-indexed
  const [pageSize, setPageSize] = useState(5);
  useEffect(() => {
    dispatch(getAllHeaderAndFooterDataThunk({ page, pageSize }));
  }, [page, pageSize, dispatch]);

  //--------------- For Pagination ends here--------------------------


  const handleView = (id) => {
    navigate(`/dashboard/headerfooter/view/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/dashboard/headerfooter/addheaderfooter/${id}`);
  };




  const toggleChange = (event, data) => {
    const isChecked = event.target.checked;
    setToggleData({
      activeStatus: isChecked ? "active" : "in-active",
      id: data.id,
    });

    setSwitchChecked(prevState => ({
      ...prevState,
      [data.id]: isChecked,
    }));

    setOpen(true);
  };

  const columns = [
    { field: "_id", headerName: "ID", flex: 0.5 },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "section",
      headerName: "Section",
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
          checked={switchChecked[params.id] ?? params.value}
          color="warning"
        />
      ),
    },
    {
      field: "createdAt",
      headerName: "Created On",
      flex: 1,
            renderCell: (params) => globalFormatDate(params?.value),
    },
    {
      field: "createdBy",
      headerName: "Created By",
      flex: 1,
      renderCell: (params) => params?.value?.fullName,
    },
    {
      field: "updatedAt",
      headerName: "Updated On",
      flex: 1,
      renderCell: (params) => globalFormatDate(params?.value),
    },
    {
      field: "updatedBy",
      headerName: "Updated By",
      flex: 1,
      renderCell: (params) => params?.value?.fullName,
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
          icon={<VisibilityIcon />}
          label="Delete"
          onClick={() => handleView(params.id)}
          // showInMenu
        />,
      ],
    },
  ];

  const fncHandleDialog = (isConfirmed) => {
    if (isConfirmed) {
      dispatch(updateHeaderAndFooterStatusThunk({ ...toggleDATA }));
    } else {
      setSwitchChecked(prevState => ({
        ...prevState,
        [toggleDATA.id]: !switchChecked[toggleDATA.id], // Reset to the previous state if canceled
      }));
    }
    setOpen(false);
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
        <Header title="Header/Footer" subtitle="Manage Header/Footer" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={() => navigate("/dashboard/headerfooter/addheaderfooter")}
          >
            <AddIcon sx={{ mr: "10px" }} />
            Add Header/Footer
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
          rows={headerandfooter}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          pagination
          page={page}
          onPageChange={(newPage) => setPage(newPage)}
          rowCount={totalCount} // Pass the total number of categories
          paginationMode="server" // Server-side pagination
        />
      </Box>
    </Box>
  );
};

export default HeaderAndFooter;
