import { Box, Button, Chip } from "@mui/material";
import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link as RouterLink, useLocation, useNavigate, useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductsThunk,
  updateProductStatusThunk,
} from "../../store/slices/product/product.slice";
import { globalFormatDate } from "../../utils/formatTime";
import ConfirmDialogBox from "../../components/ConfirmDialogBox/ConfirmDialogBox";
import Switch from "@mui/material/Switch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { renderArrayColumns } from "../../utils/utilityfunction";
import BottomDrawer from "../bottomdrawer/BottomDrawer";
import FilterListIcon from "@mui/icons-material/FilterList";
import { getAllHomeSectionProductsThunk } from "../../store/slices/homesection/homesection.slice";


const ProductSectionView = () => {

  const { homesectionproduct, totalcountproduct } = useSelector(({ homesection }) => homesection?.homesectiondata);
  const params = useParams();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [switchChecked, setSwitchChecked] = useState({}); // Keep track of switch states
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const sectionpage = query.get('sectionpage');

  //--------------- For Pagination starts here --------------------------
  const [page, setPage] = useState(sectionpage !=undefined ?sectionpage :0); // Pages are zero-indexed
  const [pageSize, setPageSize] = useState(2);
  useEffect(() => {
    dispatch(
        getAllHomeSectionProductsThunk({
        page:page || sectionpage,
        pageSize,
        id:params?.Id
      })
    );
  }, [dispatch, params,sectionpage]);

  //--------------- For Pagination ends here--------------------------
  const handleView = (id) => {
    navigate(`/dashboard/product/${id}?comesFrom=section&sectionpage=${page}&sectionid=${params?.Id}`);
  };


  const fncPageChange=(newPage)=>
    {
        setPage(newPage);
        navigate(`/dashboard/section/view/${params?.Id}?sectionpage=${newPage}`)
    }


  const approvalStatusColor = (da) => {
    console.log("da", da);
    if (da == "QCPending") {
      return (
        <Chip
          label={da}
          sx={{
            fontWeight: "600",
            background: "rgb(213, 222, 120)",
            color: "rgb(40, 41, 40)",
          }}
        />
      );
    } else if (da == "draft") {
      return (
        <Chip
          label={da}
          sx={{
            fontWeight: "600",
            background: "rgb(139, 237, 109)",
            color: "rgb(40, 41, 40)",
          }}
        />
      );
    } else if (da == "rejected") {
      return (
        <Chip
          label={da}
          sx={{
            fontWeight: "600",
            background: "rgb(237, 140, 140)",
            color: "rgb(40, 41, 40)",
          }}
        />
      );
    } else if (da == "approved") {
      return (
        <Chip
          label={da}
          sx={{
            fontWeight: "600",
            background: "rgb(50, 146, 219)",
            color: "rgb(40, 41, 40)",
          }}
        />
      );
    }
    return da;
  };

  const columns = [
    { field: "_id", headerName: "ID", flex: 0.5 },
    {
      field: "productTitle",
      headerName: "Name",
      flex: 1,
      minWidth: 100,
      cellClassName: "name-column--cell",
    },
    {
      field: "skuId",
      headerName: "SKU Id",
      flex: 1,
      minWidth: 100,
      cellClassName: "name-column--cell",
    },
    {
      field: "categoryId",
      headerName: "Category",
      flex: 1,
      minWidth: 100,
      cellClassName: "name-column--cell",
      valueGetter: (params) => params?.row?.categoryId?.name,
    },
    {
      field: "status",
      headerName: "Product Status",
      flex: 1,
      minWidth: 100,
      cellClassName: "name-column--cell",
      renderCell: (params) => approvalStatusColor(params?.row?.status),
    },
    {
      field: "subCategory",
      headerName: "Sub-Category",
      flex: 1,
      minWidth: 100,
      cellClassName: "name-column--cell",
      valueGetter: (params) => params?.row?.subCategory?.name,
    },
    {
      field: "hsn",
      headerName: "HSN Code",
      flex: 1,
      minWidth: 100,
      cellClassName: "name-column--cell",
      valueGetter: (params) => params?.row?.hsn?.name,
    },
    {
      field: "taxCode",
      headerName: "GST Code",
      flex: 1,
      minWidth: 100,
      cellClassName: "name-column--cell",
      valueGetter: (params) => params?.row?.taxCode?.name,
    },

    {
      field: "tags",
      headerName: "Tags",
      flex: 1,
      minWidth: 100,
      cellClassName: "name-column--cell",
      valueGetter: (params) => renderArrayColumns(params?.row?.tags),
    },
    {
      field: "occasion",
      headerName: "Ocassion",
      flex: 1,
      minWidth: 100,
      cellClassName: "name-column--cell",
      valueGetter: (params) => renderArrayColumns(params?.row?.occasion),
    },
    {
      field: "color",
      headerName: "Color",
      flex: 1,
      minWidth: 200,
      cellClassName: "name-column--cell",
      valueGetter: (params) => renderArrayColumns(params?.row?.color),
    },
    {
      field: "pattern",
      headerName: "Pattern",
      flex: 1,
      minWidth: 100,
      cellClassName: "name-column--cell",
      valueGetter: (params) => renderArrayColumns(params?.row?.pattern),
    },
    {
      field: "fabric",
      headerName: "Fabric",
      flex: 1,
      minWidth: 100,
      cellClassName: "name-column--cell",
      valueGetter: (params) => renderArrayColumns(params?.row?.fabric),
    },
    {
      field: "fabricCare",
      headerName: "Fabric Care",
      flex: 1,
      minWidth: 100,
      cellClassName: "name-column--cell",
      valueGetter: (params) => renderArrayColumns(params?.row?.fabricCare),
    },

    {
      field: "blousePieceType",
      headerName: "Blouse Piece Type",
      flex: 1,
      minWidth: 100,
      cellClassName: "name-column--cell",
      valueGetter: (params) => params?.row?.blousePieceType?.name,
    },
    {
      field: "sariLength",
      headerName: "Sari Length",
      flex: 1,
      minWidth: 100,
      cellClassName: "name-column--cell",
      valueGetter: (params) => params?.row?.sariLength?.name,
    },
    {
      field: "priceInfo",
      headerName: "MRP",
      flex: 1,
      minWidth: 100,
      cellClassName: "name-column--cell",
      valueGetter: (params) => params?.row?.priceInfo?.mrp,
    },
    {
      field: "priceInfo.sellingPrice",
      headerName: "Selling Price",
      flex: 1,
      minWidth: 100,
      cellClassName: "name-column--cell",
      valueGetter: (params) => params?.row?.priceInfo?.sellingPrice,
    },

    {
      field: "priceInfo.packOf",
      headerName: "Minimum Order Quantity",
      flex: 1,
      minWidth: 100,
      cellClassName: "name-column--cell",
      valueGetter: (params) => params?.row?.priceInfo?.packOf?.name,
    },
    {
      field: "isActive",
      headerName: "Is Active",
      flex: 1,
      minWidth: 100,
      renderCell: (params) => (
        <Switch
          checked={switchChecked[params.id] ?? params.value}
          color="warning"
        />
      ),
    },
    {
      field: "createdAt",
      headerName: "Created On",
      flex: 1,
      minWidth: 100,
      renderCell: (params) => globalFormatDate(params?.value),
    },
    {
      field: "createdBy",
      headerName: "Created By",
      flex: 1,
      minWidth: 100,
      renderCell: (params) => params?.value?.fullName,
    },
    {
      field: "updatedAt",
      headerName: "Updated On",
      flex: 1,
      minWidth: 100,
      renderCell: (params) => globalFormatDate(params?.value),
    },
    {
      field: "updatedBy",
      headerName: "Updated By",
      flex: 1,
      minWidth: 100,
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
        <Header title="" subtitle="Manage section Products Data" />
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
          rows={homesectionproduct}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          pagination
          page={page}
          onPageChange={(newPage) =>{fncPageChange(newPage)}}
          rowCount={totalcountproduct} // Pass the total number of categories
          paginationMode="server" // Server-side pagination
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default ProductSectionView;
