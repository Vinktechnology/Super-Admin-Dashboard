import {
  userApi,
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

export const checkTokenValidity = async (__, thunkApi) => {
    try {
      thunkApi.dispatch(startDashboardLoader());
      const { userAxios } = thunkApi.extra.apiService;
      const response = await userAxios.get(userApi);
      const responseData = response.data;
      if (responseData?.org_profiles && responseData?.org_profiles[0]?.org_id) {
        storeOrgId(responseData?.org_profiles[0]?.org_id);
      }
      if (_.get(responseData, strings.email_verify)) {
        const userDetails = formatUserResponse(responseData);
        thunkApi.dispatch(setUserProfileDetails(userDetails));
        thunkApi.dispatch(setUserAsLogin());
        return;
      }
      removeAccessToken();
      return Promise.reject();
    } catch (err) {
      return Promise.reject(err);
    } finally {
      thunkApi.dispatch(stopDashboardLoader());
    }
  };