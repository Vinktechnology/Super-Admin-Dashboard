import {
  getAllGenericMasterDataApi,addNewGenericMasterDataApi,updateGenericMasterDataStatusApi,getGenericMasterDataByIdApi
} from "../../../utils/apis.utils";
import { showFailureToast, showSuccessToast } from "../toast/toast.slice";
import { startDashboardLoader, stopDashboardLoader } from "../dashboard/dashboard.slice";


export const getAllGenericMasterDaData = async (data, thunkApi) => {
  try { 
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const response = await userAxios.get(`${getAllGenericMasterDataApi}?page=${data.page}&limit=${data.pageSize}`);
    const responseData = response?.data;
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

export const addNewGenericMasterDaData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;

    const response = await userAxios.post(addNewGenericMasterDataApi,{...data});
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

export const getGenericMasterByIdDaData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const response = await userAxios.get(`${getGenericMasterDataByIdApi}/${data}`);
    const responseData = response?.data?.data;
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


export const updateGenericMasterDaData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
   
    const response = await userAxios.put(`${addNewGenericMasterDataApi}/${data.id}`,{...data});
    const responseData = response?.data;
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


export const updateGenericMasterStatusDaData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const response = await userAxios.put(`${updateGenericMasterDataStatusApi}/${data.id}`,{...data});
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



