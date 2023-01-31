import { useAuth } from "../../context/auth";
import Jumbotron from "../../components/cards/Jumbotron";
import { NavLink } from "react-router-dom";
import AdminMenu from "../../components/nav/AdminMenu";
import { useState, useEffect } from "react";
import axios from "axios";
import { Descriptions, Select } from "antd";
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const AdminProduct = () => {
  const [auth, setAuth] = useAuth();
  const [categories, setCategories] = useState([]);

  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [shipping, setShipping] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    loadCategories();
  }, []);
  const loadCategories = async () => {
    await axios
      .get("/category")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("photo", photo);
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("category", category);
      productData.append("shipping", shipping);
      productData.append("quantity", quantity);
     
      const {data} = await axios.post('/products', productData)
      if(data?.error) {
        toast.success(`${data.error}`)
      } else {
        toast.success(`${data.name} is created`)
        //
        navigate('dashboard/admin/products')
      }

    } catch (err) {
      console.log(err);
      toast.error('Product create faild, Try again')
    }
  };

  return (
    <>
      <Jumbotron
        title={`Hello ${auth?.user?.name}`}
        subTitle="Welcome to the Admin dashboard"
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 shadow-sm">
            <AdminMenu />
          </div>
          <div className="col-9">
            <div className=" p-3 mb-3 mt-3 h4 bg-light">Carete Product</div>
            {photo && (
              <div className="text-center ">
                <img
                  src={URL.createObjectURL(photo)}
                  alt="Product"
                  className="img img-responsive"
                  height="200px"
                />
              </div>
            )}
            <div className="mt-3">
              <label className="btn btn-outline-secondary col-12 mb-3">
                {photo ? photo.name : "Upload Photo"}
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  hidden
                />
              </label>
            </div>

            <input
              type="text"
              className="form-control mb-3 p-2"
              placeholder="Write a name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="number"
              className="form-control mb-3 p-2"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <textarea
              type="text"
              className="form-control mb-3 p-2"
              placeholder="Write a description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <Select
              showSearch
              placeholder="Choice Shipping "
              size="large"
              bordered={false}
              className="form-select mb-3"
              onChange={(value) => setShipping(value)}
            >
              <Option value="0">No</Option>
              <Option value="1">Yes</Option>
            </Select>

            <Select
              showSearch
              placeholder="Select Category"
              optionFilterProp="children"
              size="large"
              bordered={false}
              className="form-select mb-3"
              onChange={(value) => setCategory(value)}
            >
              {categories?.map((c) => (
                <Option key={c._id} value={c._id}>
                  {c.name}
                </Option>
              ))}
            </Select>

            <input
              type="number"
              min="1"
              className="form-control mb-3 p-2"
              placeholder="Enter Quantity "
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button onClick={handleSubmit} className="btn btn-primary mb-5">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProduct;
