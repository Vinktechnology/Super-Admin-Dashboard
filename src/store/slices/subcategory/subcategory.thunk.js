import {
  getAllSubCategoryApi,addNewSubCategoryApi,updateSubCategoryStatusApi,getSubCategoryByIdApi
} from "../../../utils/apis.utils";
import { showFailureToast, showSuccessToast } from "../toast/toast.slice";
import { startDashboardLoader, stopDashboardLoader } from "../dashboard/dashboard.slice";


export const getAllSubCategoryData = async (data, thunkApi) => {
  try { 
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const response = await userAxios.get(`${getAllSubCategoryApi}?page=${data.page}&limit=${data.pageSize}`);
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

export const addNewSubCategoryData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    console.log("data",data);
    const formData = new FormData();
    formData.append("name", data.subcategory);
    formData.append("slug", data.slug);
    formData.append("description", data.description);
    formData.append("file", data.thumbnail[0]?.file);

    const response = await userAxios.post(`${addNewSubCategoryApi}/${data.category}`,formData,{
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

export const getSubCategoryByIdData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const response = await userAxios.get(`${getSubCategoryByIdApi}/${data}`);
    const responseData = response?.data?.subCategoryData;
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


export const updateSubCategoryData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    console.log("data of update category", data)
    const formData = new FormData();
    formData.append("name", data.subcategory);
    formData.append("categoryId", data.category);
    formData.append("slug", data.slug);
    formData.append("description", data.description);
    formData.append("file", data.thumbnail[0]?.file);
  
    const response = await userAxios.put(`${addNewSubCategoryApi}/${data.id}`,formData,{
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


export const updateSubCategoryStatusData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const response = await userAxios.put(`${updateSubCategoryStatusApi}/${data.id}`,{...data});
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



