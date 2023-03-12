import { useSearch } from "../context/search";
import ProductCard from "../components/cards/ProductCard";
import Jumbotron from "../components/cards/Jumbotron";

const Search = () => {
  const [values, setValues] = useSearch();
  console.log(values.results);
  return (
    <>
      <Jumbotron
        title="Search Results "
        subTitle={
          values?.results?.length < 1
            ? "No Products Found"
            : `product found ${values?.results?.length}`
        }
      />
      <div className="container mt-3">
        <div className="row">
          {values?.results?.map((p) => (
            <div key={p._id} >
              <ProductCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
