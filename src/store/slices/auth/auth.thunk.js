import {
  emailLoginApi,
} from "../../../utils/apis.utils";
import { formatUserResponse } from "../../../utils/global/user.global";
import { showFailureToast, showSuccessToast } from "../toast/toast.slice";
import { setUserProfileDetails } from "../user/user.slice";
import { startDashboardLoader, stopDashboardLoader } from "../dashboard/dashboard.slice";


export const signInWithEmail = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { default: defaultAxios } = thunkApi.extra.apiService;
    const response = await defaultAxios.post(emailLoginApi, {
      ...data,
    });

    const responseData = response.data;

      const userDetails = formatUserResponse(responseData.userDetails);
      thunkApi.dispatch(setUserProfileDetails(userDetails));
      thunkApi.dispatch(
        showSuccessToast({
          message: "Logged in Successfully",
          vertical: "bottom",
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
