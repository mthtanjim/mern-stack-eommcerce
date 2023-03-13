import useCategoris from "../hooks/useCategory";
import Jumbotron from "../components/cards/Jumbotron";
import { Link } from "react-router-dom";

export default function CategorisList() {
  const categories = useCategoris();
  return (
    <>
      <Jumbotron title="categoris" />

      <div className="container overflow-hidden">
        <div className="row gx-5 gy-5 mt-3 mb-5">
          {categories?.map((c) => (
            <div className="col-md-6">
                <Link to={`/category/${c.slug}`} >
                <button className="btn btn-light col-12 text-dark p-3 ">
                {c.name}
              </button>
                </Link>
             
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
