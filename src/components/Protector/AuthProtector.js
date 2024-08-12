import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getAccessToken } from "../../utils/global/auth.global";
import { useDispatch } from "react-redux";
import { checkForTokenValidityAsyncThunk } from "../../store/slices/init/init.slice";
import { useEffect } from "react";
function AuthProtector({ children }) {
  // const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);

  // if (!isLoggedIn) return <Navigate to="/" />;

  // return children;
  const dispatch = useDispatch();
  const token = getAccessToken("token"); // or sessionStorage.getItem('token')

  useEffect(() => {
    if(token)dispatch(checkForTokenValidityAsyncThunk());
  }, []);

  if (!token) {
    return <Navigate to="/" replace />; // Redirect to login page if not authenticated
  }

  // You can also add additional logic here, such as token validation

  return children;
}

export default AuthProtector;
