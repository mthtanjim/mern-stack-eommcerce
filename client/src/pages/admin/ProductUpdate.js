import { Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Jumbotron from "../../components/cards/Jumbotron";
import AdminMenu from "../../components/nav/AdminMenu";
import { useAuth } from "../../context/auth";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from "antd";
const { confirm } = Modal;
const { Option } = Select;

const AdminProductUpdate = () => {
  const [auth, setAuth] = useAuth();
  const [categories, setCategories] = useState([]);

  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [shipping, setShipping] = useState("");
  const [quantity, setQuantity] = useState("");
  const [id, setId] = useState("")
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    loadProduct();
  }, []);

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

  const loadProduct = async () => {
    try { 
        const {data} = await axios.get(`/products/${params.slug}`)
        setName(data.name)
        setDescription(data.description)
        setPrice(data.price)
        setQuantity(data.quantity)
        setCategory(data.category._id)
        setShipping(data.shipping)
        setQuantity(data.quantity)
        setId(data._id)
        setPhoto(data.photo)        
    }catch(err) {
        console.log(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      photo && productData.append("photo", photo);
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("category", category);
      productData.append("shipping", shipping);
      productData.append("quantity", quantity);
     
      const {data} = await axios.put(`/products/${id}`, productData)
      
      if(data?.error) {
        toast.success(`${data.error}`)
      } else {
        toast.success(`${data.name} is updated`)
        //
        navigate('/dashboard/admin/products')
        // window.location.reload()
      }

    } catch (err) {
      console.log(err);
      toast.error('Product update faild, Try again')
    }
  }

  const showConfirm = () => {
    confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleFilled />,
      onOk() {
       return(handleDelete())
      },
      onCancel() {
        console.log('Cancel');
      },
    });
    
  };

const handleDelete = async () => {
  console.log("hadnle delete")
  try {
    const {data} = await axios.delete(`/products/${id}`)
    toast.success(`${data.name} Deleted`)
    navigate('/dashboard/admin/products')
  }catch(err) {
    console.log(err)
    toast.error("Delete Faild, Try again")
  }
}

  return (
    <>
      <Jumbotron
        title={`Hello ${auth?.user?.name}`}
        subTitle="Welcome to the Admin dashboard"
      />
      <div className="container-fluid">
        <div className="row ">
          <div className="col-3 shadow-sm">
            <AdminMenu />
          </div>
         
          <div className="col-9">
            <div className=" p-3 mb-3 mt-3 h4 bg-light">Update Product</div>
            {photo ? (
              <div className="text-center ">
                <img
                  src={URL.createObjectURL(photo)}
                  alt="Product"
                  className="img img-responsive"
                  height="200px"
                />
              </div>
            ) : ( 
              <div className="text-center">
              <img
                src={`${
                  process.env.REACT_APP_API
                }/products/photo/${id}?${new Date().getTime}`}
                alt="sobi"
                className="img img-responsive"
              />
            </div>
          )
            }
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
              bordered={false}
              size="large"
              className="form-select mb-3"
              placeholder="Choose shipping"
              onChange={(value) => setShipping(value)}
              value={shipping ? "yes" : "no"}
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
              value={category}
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
           <div className="d-flex justify-content-between">
           <button onClick={handleSubmit} className="btn btn-primary mb-5">
              Update
            </button>
            <button onClick={showConfirm} className="btn btn-danger mb-5">
              Delete
            </button>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProductUpdate;
