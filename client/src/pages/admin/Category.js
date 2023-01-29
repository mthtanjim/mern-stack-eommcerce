import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Jumbotron from "../../components/cards/Jumbotron";
import CategoryForm from "../../components/forms/CategoryForm";
import AdminMenu from "../../components/nav/AdminMenu";
import { useAuth } from "../../context/auth";
import { Modal } from "antd";

const AdminCategory = () => {
  const [auth, setAuth] = useAuth();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [visible, setVisible] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/category`, { name });
      if (data?.error) {
        console.log(data);
        toast.error(data.error);
      } else {
        loadCategories();
        setName("");
        toast.success(`${data.name} is created`);
      }
    } catch (err) {
      toast.error("failed to create category, try again");
      console.log(err);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    await axios
      .get("/category")
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
            <div className=" mb-3 mt-3 h4 bg-light">Manage Categories</div>

            <CategoryForm value={name} setValue={setName} submit={submit} />

            <hr />
            <div className="col">
              {category &&
                category.map((data) => (
                  <button
                    className="btn m-1 shadow-sm border border-secondary"
                    onClick={() => {
                      setVisible(true);
                    }}
                    key={data._id}
                  >
                    {data.name}
                  </button>
                ))}
            </div>

            <Modal
              open={visible}
              onOk={() => setVisible(false)}
              onCancel={() => {
                setVisible(false);
              }}
              footer={null}
            >
               <CategoryForm 
           value={name} 
           setValue={setName} 
           submit={submit}
           />
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCategory;
