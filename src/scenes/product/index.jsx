import { Box, Button, Chip } from "@mui/material";
import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
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

const Product = () => {
  const { products, totalCount } = useSelector(
    ({ product }) => product?.productsdata
  );

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const status = query.get("status");

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [toggleDATA, setToggleData] = useState(null);
  const [switchChecked, setSwitchChecked] = useState({}); // Keep track of switch states
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //--------------- For Pagination starts here --------------------------
  const [page, setPage] = useState(0); // Pages are zero-indexed
  const [pageSize, setPageSize] = useState(50);
  useEffect(() => {
    dispatch(getAllProductsThunk({ page, pageSize ,status}));
  }, [page, pageSize, dispatch, status]);

  //--------------- For Pagination ends here--------------------------
  const handleView = (id) => {
    navigate(`/dashboard/product/${id}`);
  };

  const toggleChange = (event, data) => {
    const isChecked = event.target.checked;
    setToggleData({
      activeStatus: isChecked ? "active" : "in-active",
      id: data.id,
    });

    setSwitchChecked((prevState) => ({
      ...prevState,
      [data.id]: isChecked,
    }));

    setOpen(true);
  };
  const handleEdit = (id) => {
    // alert(`Edit row with ID: ${id}`);
    navigate(`/dashboard/product/addproduct/${id}`);
    // Implement your edit functionality here
  };

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
     return <Chip
        label={da}
        sx={{
          fontWeight: "600",
          background: "rgb(237, 140, 140)",
          color: "rgb(40, 41, 40)",
        }}
      />
    } else if (da == "approved") {
      return  <Chip
      label={da}
      sx={{
        fontWeight: "600",
        background: "rgb(50, 146, 219)",
        color: "rgb(40, 41, 40)",
      }}
    />
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

  const fncHandleDialog = (isConfirmed) => {
    if (isConfirmed) {
      dispatch(updateProductStatusThunk({ ...toggleDATA }));
    } else {
      setSwitchChecked((prevState) => ({
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
        <Header title="Product" subtitle="Manage Product" />
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
          rows={products}
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

export default Product;
