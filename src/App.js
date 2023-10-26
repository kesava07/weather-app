import Weather from "./components/Weather";
import LeftContainer from "./components/LeftContainer";
import AppContainer from "./components/AppContainer";

const App = () => {
  return (
    <AppContainer>
      <LeftContainer />
      <Weather />
    </AppContainer>
  )
}

export default App;