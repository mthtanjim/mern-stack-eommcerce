import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/nav/Menu";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/user/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/routes/PrivateRoute";
import AdminRoute from "./components/routes/AdminRoute";
import NotFound from "./pages/NotFound";
import Secret from "./pages/Secret";
import AdminCategory from "./pages/admin/Category";
import AdminProduct from "./pages/admin/Product";
import AdminProductsUpdate from "./pages/admin/ProductUpdate";
import UserOrders from "./pages/user/Orders";
import UserProfile from "./pages/user/Profile";
import AdminProducts from "./pages/admin/Products";
import Shop from "./pages/Shop";
import SearchProvider from "./context/search";

function App() {
  return (
    <Router>
      <Menu />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<UserProfile />} />
          <Route path="user/order" element={<UserOrders />} />
          <Route path="secret" element={<Secret />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/product" element={<AdminProduct />} />
          <Route path="admin/product/update/:slug" element={<AdminProductsUpdate />} />
          <Route path="admin/products" element={<AdminProducts />} />
          <Route path="admin/category" element={<AdminCategory />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
