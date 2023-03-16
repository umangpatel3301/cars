import CarForm from "./Components/carForm";
import CarList from "./Components/carList";
import CarSreach from "./Components/carSreach";
import CarValue from "./Components/carValue";
const App = () => {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSreach />
      <CarList />

      <CarValue />
    </div>
  );
};

export default App;
