import {
  updateProductApi,
  getAllProductsApi,
  getProductsByIdApi,
  updateProductStatusApi,
  approvalProductApi,
} from "../../../utils/apis.utils";
import { showFailureToast, showSuccessToast } from "../toast/toast.slice";
import {
  startDashboardLoader,
  stopDashboardLoader,
} from "../dashboard/dashboard.slice";
import { gridColumnsTotalWidthSelector } from "@mui/x-data-grid";

export const getAllProductsData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    console.log("dsfsdfsdfs  data  ", data);
    const { user: userAxios } = thunkApi.extra.apiService;
    let ddStatus = "";
    if (data.status == "" || data.status == null) {
      ddStatus = "all";
    } else {
      ddStatus=data.status;
    }
    let url = `${getAllProductsApi}?page=${data.page}&limit=${
      data.pageSize
    }&status=${ddStatus}&category=${
      data.category==null?"": data.category
    }&subCategory=${data.subCategory==null ?"":data.subCategory }&tags=${data.tags==null?"":data.tags}`;

    console.log("dsfsdfsdfs  url  ", url);
    const response = await userAxios.get(url);
    const responseData = response?.data;
    return responseData;
  } catch (err) {
    console.log("err", err);
    thunkApi.dispatch(
      showFailureToast({
        message: err,
        vertical: "top",
        horizontal: "right",
      })
    );
    return Promise.reject();
  } finally {
    thunkApi.dispatch(stopDashboardLoader());
  }
};

// export const addNewCategoryData = async (data, thunkApi) => {
//   try {
//     thunkApi.dispatch(startDashboardLoader());
//     const { user: userAxios } = thunkApi.extra.apiService;
//     const formData = new FormData();
//     formData.append("name", data.category);
//     formData.append("slug", data.slug);
//     formData.append("description", data.description);
//     formData.append("file", data.thumbnail[0]?.file);
//     data?.sampleimages.forEach((da, index) => {
//       formData.append('sampleImages', da.file);
//     });
//     const response = await userAxios.post(addNewCategoryApi,formData,{
//       headers: {
//         "Content-Type": undefined
//       }});
//     const responseData = response;
//     thunkApi.dispatch(
//       showSuccessToast({
//         message: responseData?.message,
//         vertical: "top",
//         horizontal: "right",
//       })
//     );
//     return responseData?.data?.newCategory;

//   } catch (err) {
//     thunkApi.dispatch(
//       showFailureToast({
//         message: err,
//         vertical: "top",
//         horizontal: "right",
//       })
//     );
//     return Promise.reject();
//   }
//   finally
//   {
//     thunkApi.dispatch(stopDashboardLoader());
//   }
// };

export const getProductsByIdData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const response = await userAxios.get(`${getProductsByIdApi}/${data}`);
    const responseData = response?.data?.productDetails;
    return responseData;
  } catch (err) {
    thunkApi.dispatch(
      showFailureToast({
        message: err,
        vertical: "top",
        horizontal: "right",
      })
    );
    return Promise.reject();
  } finally {
    thunkApi.dispatch(stopDashboardLoader());
  }
};

export const updateProductData = async (data, thunkApi) => {
  try {
    const { productId, ...rest } = { ...data };
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const response = await userAxios.put(`${updateProductApi}/${productId}`, {
      ...rest,
    });
    console.log("data", response);
    const responseData = response?.data;
    thunkApi.dispatch(
      showSuccessToast({
        message: response.message,
        vertical: "top",
        horizontal: "right",
      })
    );
    return responseData;
  } catch (err) {
    thunkApi.dispatch(
      showFailureToast({
        message: err,
        vertical: "top",
        horizontal: "right",
      })
    );
    return Promise.reject();
  } finally {
    thunkApi.dispatch(stopDashboardLoader());
  }
};

export const updateProductStatusData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const response = await userAxios.put(
      `${updateProductStatusApi}/${data.id}`,
      { ...data }
    );
    const responseData = response?.data;

    thunkApi.dispatch(
      showSuccessToast({
        message: response.message,
        vertical: "top",
        horizontal: "right",
      })
    );
    return responseData;
  } catch (err) {
    thunkApi.dispatch(
      showFailureToast({
        message: err,
        vertical: "top",
        horizontal: "right",
      })
    );
    return Promise.reject();
  } finally {
    thunkApi.dispatch(stopDashboardLoader());
  }
};

export const approveProductData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const response = await userAxios.put(`${approvalProductApi}/${data.id}`, {
      ...data,
    });
    const responseData = response?.data;

    thunkApi.dispatch(
      showSuccessToast({
        message: response.message,
        vertical: "top",
        horizontal: "right",
      })
    );
    return responseData;
  } catch (err) {
    thunkApi.dispatch(
      showFailureToast({
        message: err,
        vertical: "top",
        horizontal: "right",
      })
    );
    return Promise.reject();
  } finally {
    thunkApi.dispatch(stopDashboardLoader());
  }
};
