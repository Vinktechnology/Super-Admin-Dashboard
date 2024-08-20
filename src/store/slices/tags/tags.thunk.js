import {
  getAllTagApi,addNewTagApi,updateTagStatusApi,getTagByIdApi
} from "../../../utils/apis.utils";
import { showFailureToast, showSuccessToast } from "../toast/toast.slice";
import { startDashboardLoader, stopDashboardLoader } from "../dashboard/dashboard.slice";


export const getAllTagsData = async (data, thunkApi) => {
  try { 
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const response = await userAxios.get(`${getAllTagApi}?page=${data.page}&limit=${data.pageSize}`);
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

export const addNewTagsData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const formData = new FormData();
    formData.append("name", data.tag);
    formData.append("slug", data.slug);
    formData.append("description", data.description);
    formData.append("file", data.thumbnail[0]?.file);
  
    const response = await userAxios.post(addNewTagApi,formData,{
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

export const getTagByIdData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const response = await userAxios.get(`${getTagByIdApi}/${data}`);
    const responseData = response?.data?.tagData;
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


export const updateTagData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const formData = new FormData();
    formData.append("name", data.tag);
    formData.append("slug", data.slug);
    formData.append("description", data.description);
    formData.append("file", data.thumbnail[0]?.file);
    const response = await userAxios.put(`${addNewTagApi}/${data.id}`,formData,{
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


export const updateTagStatusData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const response = await userAxios.put(`${updateTagStatusApi}/${data.id}`,{...data});
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



