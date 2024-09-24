import {
  getAllPaymentMethodApi,addNewPaymentMethodApi,updatePaymentMethodStatusApi,getPaymentMethodByIdApi
} from "../../../utils/apis.utils";
import { showFailureToast, showSuccessToast } from "../toast/toast.slice";
import { startDashboardLoader, stopDashboardLoader } from "../dashboard/dashboard.slice";
import { gridColumnsTotalWidthSelector } from "@mui/x-data-grid";


export const getAllPaymentMethodData = async (data, thunkApi) => {
  try { 
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const response = await userAxios.get(`${getAllPaymentMethodApi}?page=${data.page}&limit=${data.pageSize}`);
    console.log("response",response?.data)
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
  }
  finally
  {
    thunkApi.dispatch(stopDashboardLoader());
  }
};

export const addNewPaymentMethodData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const formData = new FormData();
    formData.append("label", data.label);
    formData.append("value", data.value);
    formData.append("mobile_label", data.mobile_label);
    formData.append("position", data.position);
    formData.append("image", data.image[0]?.file);

    const response = await userAxios.post(addNewPaymentMethodApi,formData,{
      headers: {
        "Content-Type": undefined
      }});
    const responseData = response;
    thunkApi.dispatch(
      showSuccessToast({
        message: responseData?.message,
        vertical: "top",
        horizontal: "right",
      })
    );
    return responseData?.data?.newCategory;
   
  } catch (err) {
    thunkApi.dispatch(
      showFailureToast({
        message: err,
        vertical: "top",
        horizontal: "right",
      })
    );
    return Promise.reject();
  }
  finally
  {
    thunkApi.dispatch(stopDashboardLoader());
  }
};

export const getPaymentMethodByIdData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const response = await userAxios.get(`${getPaymentMethodByIdApi}/${data}`);

    console.log("data732323487298",response?.data)
    const responseData = response?.data?.paymentMethod;
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
  }
  finally
  {
    thunkApi.dispatch(stopDashboardLoader());
  }
};


export const updatePaymentMethodData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    console.log("data of update category", data)
    const formData = new FormData();
      formData.append("label", data.label);
    formData.append("value", data.value);
    formData.append("mobile_label", data.mobile_label);
    formData.append("position", data.position);
    formData.append("image", data.image[0]?.file);
    const response = await userAxios.put(`${addNewPaymentMethodApi}/${data.id}`,formData,{
      headers: {
        "Content-Type": undefined
      }});
    const responseData = response?.data;

    console.log("data of updated category response", response);
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
  }
  finally
  {
    thunkApi.dispatch(stopDashboardLoader());
  }
};


export const updatePaymentMethodStatusData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const response = await userAxios.put(`${updatePaymentMethodStatusApi}/${data.id}`,{...data});
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
  }
  finally
  {
    thunkApi.dispatch(stopDashboardLoader());
  }
};



