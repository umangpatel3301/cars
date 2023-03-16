import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store/slices/carSlice";

const CarSreach = () => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };
  const searchTerms = useSelector((state) => {
    return state.cars.searchTerm;
  });
  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input className="input" value={searchTerms} onChange={handleChange} />
      </div>
    </div>
  );
};

export default CarSreach;
