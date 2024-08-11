import {
  getAllCategoryApi,
} from "../../../utils/apis.utils";
import { formatUserResponse } from "../../../utils/global/user.global";
import { showFailureToast, showSuccessToast } from "../toast/toast.slice";
import { setUserProfileDetails } from "../user/user.slice";
import { startDashboardLoader, stopDashboardLoader } from "../dashboard/dashboard.slice";


export const getAllCategoryData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const response = await userAxios.get(getAllCategoryApi);
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
