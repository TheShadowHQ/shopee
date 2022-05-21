import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hook/use-auth";

const AuthRoute = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRoute;
