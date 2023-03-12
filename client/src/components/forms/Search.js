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
        <input
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
          value={values.keyword}
          type="text"
          placeholder="Search..."
          className="form-control me-2"
        />
        <button className="btn btn-secondary bg-white text-black" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
