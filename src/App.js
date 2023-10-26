import LocationSearchInput from "./components/LocationSearchInput"
import Heading from "./components/Heading";
import Weather from "./components/Weather";

const App = () => {
  return (
    <div className="container my-4">
      <Heading title="Weather App" />
      <LocationSearchInput />
      <Weather />
    </div>
  )
}

export default App;