import {
  getAllClientsApi,getClientsByIdApi
} from "../../../utils/apis.utils";
import { showFailureToast, showSuccessToast } from "../toast/toast.slice";
import { startDashboardLoader, stopDashboardLoader } from "../dashboard/dashboard.slice";


export const getAllClientData = async (data, thunkApi) => {
  try { 
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    // let ddStatus = "";
    // if (data.status == "" || data.status == null) {
    //   ddStatus = "all";
    // } else {
    //   ddStatus=data.status;
    // }

    // let ddstatae = "";
    // if (data.state == "" || data.state == null) {
    //   ddstatae = "";
    // } else {
    //   ddstatae=data.state;
    // }

    // let ddcity = "";
    // if (data.city == "" || data.city == null) {
    //   ddcity = "";
    // } else {
    //   ddcity=data.city;
    // }

    // let ddmobile = "";
    // if (data.mobile == "" || data.mobile == null) {
    //   ddmobile = "";
    // } else {
    //   ddmobile=data.mobile;
    // }

    // let ddemail = "";
    // if (data.email == "" || data.email == null) {
    //   ddemail = "";
    // } else {
    //   ddemail=data.email;
    // }
    
    // let ddfullname = "";
    // if (data.fullName == "" || data.fullName == null) {
    //   ddfullname = "";
    // } else {
    //   ddfullname=data.fullName;
    // }

    // let paramUrl = `page=${data.page}&limit=${data.pageSize}&status=${ddStatus}&state=${ddstatae}&city=${ddcity}&email=${ddemail}&fullName=${ddfullname}&mobile=${ddmobile}`;
  // const url = `${getAllClientsApi}?${paramUrl}`
    const url = `${getAllClientsApi}?page=${data.page}&limit=${data.pageSize}`
    const response = await userAxios.get(url);
    console.log("esponse?.data",response?.data)
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

export const getClientByIdData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const response = await userAxios.get(`${getClientsByIdApi}/${data}`);
    const responseData = response?.data?.vendorData;
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







