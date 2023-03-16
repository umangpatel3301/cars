import { useSelector } from "react-redux";

const CarValue = () => {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    const filterCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filterCars.reduce((acc, car) => acc + car.cost, 0);
  });
  return <div className="car-value">Totalcost: ${totalCost}</div>;
};

export default CarValue;
