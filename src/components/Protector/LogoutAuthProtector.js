import { useSelector } from "react-redux";
import { Navigate, json } from "react-router-dom";


function LogoutAuthProtector({ children }) {
    

  // const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const isLoggedIn = false;

  if (isLoggedIn) return <Navigate to="/dashboard" />;

  return children;
}

export default LogoutAuthProtector;