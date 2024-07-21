import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AuthProtector({ children }) {
  const isLoggedIn = true;
  // const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);

  if (!isLoggedIn) return <Navigate to="/login" />;

  return children;
}

export default AuthProtector;
