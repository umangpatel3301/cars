import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";
const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(({ cars: { data, searchTerm } }) => {
    return data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  const handleDelete = ({ id }) => {
    dispatch(removeCar(id));
  };

  const renderCar = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p className="">
          {car.name} - ${car.cost}
        </p>
        <button className="button is-danger" onClick={() => handleDelete(car)}>
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderCar}
      <hr />
    </div>
  );
};

export default CarList;
