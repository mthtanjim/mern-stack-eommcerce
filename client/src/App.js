import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/nav/Menu"
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import {Toaster} from "react-hot-toast"

function App() {


  return (
    <Router>
      <Menu/>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
