import axios from "axios";
import { useSearch } from "../../context/search";
import { useNavigate } from "react-router-dom";

const Search = () => {
  //hooks
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const hadleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`/products/search/${values?.keyword}`);
      // console.log("search Keyword =>", keyword);
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
     <form className="d-flex" onSubmit={hadleSubmit}>
  <div className="input-group">
    <input
      onChange={(e) => setValues({ ...values, keyword: e.target.value })}
      value={values.keyword}
      type="text"
      placeholder="Search for products (e.g react, node, course)"
      className="form-control"
    />

    <button className="input-group-text text-secondary bg-white" type="submit">
      Search
    </button>
  </div>
</form>

    </div>
  );
};

export default Search;
