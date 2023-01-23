import { useNavigate, Link } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className=" mt-5 d-flex flex-column justify-content-center align-item-center ">
        <h1 className="d-flex justify-content-center">Opps, 404 not found</h1>
        <p className="d-flex justify-content-center">this page is not found</p>
        <Link className="d-flex justify-content-center" to="/">
            Back to Home
        </Link>
    </div>
  );
};

export default NotFound;
