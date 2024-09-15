import "./App.css";
import { RegistriesProvider } from "./contexts/RegistriesContext";
import RegistriesForm from "./registries/RegistriesForm";
import RegistriesList from "./registries/RegistriesList";
import RegistryDeleteBtn from "./registries/RegistryDeleteBtn";

function App() {
  return (
    <div className="App">
      <RegistriesProvider>
        <h1>Autopistas Argentinas S.A</h1>
        <RegistriesForm />
        <RegistriesList />
        <RegistryDeleteBtn />
      </RegistriesProvider>
    </div>
  );
}

export default App;
