import {
  getAllVendorsApi,updateVendorsStatusApi,getVendorsByIdApi,approvalVendorApi
} from "../../../utils/apis.utils";
import { showFailureToast, showSuccessToast } from "../toast/toast.slice";
import { startDashboardLoader, stopDashboardLoader } from "../dashboard/dashboard.slice";



export const getAllVendorData = async (data, thunkApi) => {
  try { 
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    let ddStatus = "";
    if (data.status == "" || data.status == null) {
      ddStatus = "all";
    } else {
      ddStatus=data.status;
    }

    let ddstatae = "";
    if (data.state == "" || data.state == null) {
      ddstatae = "";
    } else {
      ddstatae=data.state;
    }

    let ddcity = "";
    if (data.city == "" || data.city == null) {
      ddcity = "";
    } else {
      ddcity=data.city;
    }

    let ddmobile = "";
    if (data.mobile == "" || data.mobile == null) {
      ddmobile = "";
    } else {
      ddmobile=data.mobile;
    }

    let ddemail = "";
    if (data.email == "" || data.email == null) {
      ddemail = "";
    } else {
      ddemail=data.email;
    }
    
    let ddfullname = "";
    if (data.fullName == "" || data.fullName == null) {
      ddfullname = "";
    } else {
      ddfullname=data.fullName;
    }

    const url = `${getAllVendorsApi}?page=${data.page}&limit=${data.pageSize}&status=${ddStatus}&state=${ddstatae}&city=${ddcity}&email=${ddemail}&fullName=${ddfullname}&mobile=${ddmobile}`
    const response = await userAxios.get(url);
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

// export const addNewCategoryData = async (data, thunkApi) => {
//   try {
//     thunkApi.dispatch(startDashboardLoader());
//     const { user: userAxios } = thunkApi.extra.apiService;
//     const formData = new FormData();
//     formData.append("name", data.category);
//     formData.append("slug", data.slug);
//     formData.append("description", data.description);
//     formData.append("file", data.thumbnail[0]?.file);
//     data?.sampleimages.forEach((da, index) => {
//       formData.append('sampleImages', da.file); 
//     });
//     const response = await userAxios.post(addNewVendorsApi,formData,{
//       headers: {
//         "Content-Type": undefined
//       }});
//     const responseData = response;
//     thunkApi.dispatch(
//       showSuccessToast({
//         message: responseData?.message,
//         vertical: "top",
//         horizontal: "right",
//       })
//     );
//     return responseData?.data?.newCategory;
   
//   } catch (err) {
//     thunkApi.dispatch(
//       showFailureToast({
//         message: err,
//         vertical: "top",
//         horizontal: "right",
//       })
//     );
//     return Promise.reject();
//   }
//   finally
//   {
//     thunkApi.dispatch(stopDashboardLoader());
//   }
// };

export const getVendorByIdData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const response = await userAxios.get(`${getVendorsByIdApi}/${data}`);
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


// export const updateCategoryData = async (data, thunkApi) => {
//   try {
//     thunkApi.dispatch(startDashboardLoader());
//     const { user: userAxios } = thunkApi.extra.apiService;
//     console.log("data of update category", data)
//     const formData = new FormData();
//     formData.append("name", data.category);
//     formData.append("slug", data.slug);
//     formData.append("description", data.description);
//     formData.append("file", data.thumbnail[0]?.file);
//     data?.sampleimages.forEach((da, index) => {
//       formData.append('sampleImages', da.file); // 'sampleImages' is the key, 'file' is the File object
//     });
//     const response = await userAxios.put(`${addNewVendorsApi}/${data.id}`,formData,{
//       headers: {
//         "Content-Type": undefined
//       }});
//     const responseData = response?.data;

//     console.log("data of updated category response", response);
//     return responseData;
   
//   } catch (err) {
//     thunkApi.dispatch(
//       showFailureToast({
//         message: err,
//         vertical: "top",
//         horizontal: "right",
//       })
//     );
//     return Promise.reject();
//   }
//   finally
//   {
//     thunkApi.dispatch(stopDashboardLoader());
//   }
// };


export const updateVendorStatusData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const response = await userAxios.put(`${updateVendorsStatusApi}/${data.id}`,{...data});
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



export const approveVendorData = async (data, thunkApi) => {
  try {
    thunkApi.dispatch(startDashboardLoader());
    const { user: userAxios } = thunkApi.extra.apiService;
    const response = await userAxios.put(`${approvalVendorApi}/${data.id}`,{...data});
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






