
import {
    getDashboardDataApi
  } from "../../../utils/apis.utils";
  import { showFailureToast, showSuccessToast } from "../toast/toast.slice";
  import { startDashboardLoader, stopDashboardLoader } from "../dashboard/dashboard.slice";
  
  export const getDashboardDataSlice = async (data, thunkApi) => {
    try { 
      thunkApi.dispatch(startDashboardLoader());
      const { user: userAxios } = thunkApi.extra.apiService;
      const response = await userAxios.get(`${getDashboardDataApi}`);
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