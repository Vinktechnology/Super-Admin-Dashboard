import { Box, Button, iconButtonClasses } from "@mui/material";
import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { globalFormatDate } from "../../utils/formatTime.js";
import { getAllHomeRenderThunk , getHomeRenderByIdThunk} from "../../store/slices/home/home.slice.js";
import ModalSectionPosition from "../../modals/ModalSectionPosition.js";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { homerender, totalCount } = useSelector(({ homerender }) => homerender?.homerenderdata);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedId, setSelectedId] = useState(null);
  const [position, setPosition] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  //--------------- For Pagination starts here --------------------------
  const [page, setPage] = useState(0);  // Pages are zero-indexed
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    dispatch(getAllHomeRenderThunk({ page, pageSize }));
  }, [page, pageSize, dispatch]);

  //--------------- For Pagination ends here--------------------------


  const handleEdit = (param) => {
    setSelectedId(param.id)
    setPosition(param.row.position)
    setIsDialogOpen(true)
  };



  const handleView = (param) => {
    console.log("row",param)
    if(param?.row?.sectionType=="banner")
      {
    navigate(`/dashboard/banner/view/${param?.id}?comesFrom=home`);

      }
      else{
    navigate(`/dashboard/section/view/${param?.id}?comesFrom=home`);

      }
  };



  const columns = [
    { field: "_id", headerName: "ID", flex: 0.5 },
    {
      field: "title",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "onScreenToBeDisplayed",
      headerName: "Screen",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "scrollingType",
      headerName: "Scroll Type",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "position",
      headerName: "Displaying Position",
      flex: 1,
      cellClassName: "name-column--cell",
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
          onClick={() => handleEdit(params)}
        />,
        <GridActionsCellItem
        icon={<VisibilityIcon />}
        label="Delete"
        onClick={() => handleView(params)}
        // showInMenu
      />,
      ],
    },
  ];


  const fncHandleDialog = (data) => {


    console.log("dsdfsdfsfd",data)

    if (data?.isSubmit) {
      dispatch(getHomeRenderByIdThunk({...data,id:selectedId}))
        .unwrap()
        .then((da) => {
          window.location.reload();
        });
    }
    setIsDialogOpen(false);
  };




  return (
    <Box p={2}>
      <ModalSectionPosition
           title="Please set the Section Position"
           body="If you set the sections position then it will be visible on the application."
           cancel="Cancel"
           confirm="Confirm"
           fncHandleDialog={fncHandleDialog}
           isopen={isDialogOpen}
           pos={position}
      />
 
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Home Data" subtitle="Manage Home Data" />

        <Box>
         
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
          rows={homerender}
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

export default Home;
