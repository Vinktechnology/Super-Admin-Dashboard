import {
  checkusertokenvalidityApi
} from "../../../utils/apis.utils";
import {
  removeAccessToken,
} from "../../../utils/global/auth.global";
import { formatUserResponse } from "../../../utils/global/user.global";
import { setUserAsLogin } from "../auth/auth.slice";
import { setUserProfileDetails } from "../user/user.slice";
import {
  startDashboardLoader,
  stopDashboardLoader,
} from "../dashboard/dashboard.slice";
import { showFailureToast, showSuccessToast } from "../toast/toast.slice";

export const checkTokenValidity = async (__, thunkApi) => {
    try {

      // thunkApi.dispatch(startDashboardLoader());
      const { user: userAxios } = thunkApi.extra.apiService;
      const response = await userAxios.post(checkusertokenvalidityApi);
  
      if(response.status)
        {
          const userDetails = formatUserResponse( response.data.userDetails);
          thunkApi.dispatch(setUserProfileDetails(userDetails));
          return ;
        }
        // removeAccessToken();
        return Promise.reject();
     
    } catch (err) {
      thunkApi.dispatch(
        showFailureToast({
          message: err,
          vertical: "bottom",
          horizontal: "center",
        })
      );
      return Promise.reject();
    }
    finally
    {
      // thunkApi.dispatch(stopDashboardLoader());
    }
  };