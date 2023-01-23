import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Loading from "./Loading";
import axios from "axios";

const PrivateRoute = () => {
  const [auth, setAuth] = useAuth();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const authCheck = async () => {
      const { data } = await axios.get(
        `/auth-check`);
      console.log("get => ", data);
      if (data?.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Loading />;
};

export default PrivateRoute;
