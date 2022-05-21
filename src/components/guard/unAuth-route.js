import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hook/use-auth";

const UnAuthRoute = () => {
  const auth = useAuth();
  return auth ? <Navigate to="/" /> : <Outlet />;
};

export default UnAuthRoute;
