import { useSelector } from "react-redux";
import { Navigate, json } from "react-router-dom";
import { getAccessToken } from "../../utils/global/auth.global";


function LogoutAuthProtector({ children }) {
  const token = getAccessToken('token'); // or sessionStorage.getItem('token')

  if (token) {
    return <Navigate to="/dashboard" replace />; // Redirect to dashboard if already authenticated
  }

  return children;
}

export default LogoutAuthProtector;