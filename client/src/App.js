import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/nav/Menu"
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/user/Dashboard";
import {Toaster} from "react-hot-toast"
import PrivateRoute from "./components/routes/PrivateRoute";
import NotFound from "./pages/NotFound";
import Secret from "./pages/Secret";

function App() {


  return (
    <Router>
      <Menu/>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute/>} >
          <Route path="" element={<Dashboard />} />
          <Route path="secret" element={<Secret/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
