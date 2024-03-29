import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Loading from "./Loading";

const AdminRoute = () => {
  const [auth, setAuth] = useAuth()
  const [ok, setOk] = useState(false)

  useEffect(() => {
    const authCheck = async () => {
      const {data} = await axios.get(`/admin-check`)
      if (data?.ok) {
        setOk(true)
      } else {
        setOk(false)
      }
    }
    authCheck()
  }, [auth?.token])

  return ok ? <Outlet/> : <Loading path=""/>
}

export default AdminRoute