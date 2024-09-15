import { useContext } from "react";
import { RegistriesContext } from "../contexts/RegistriesContext";

function RegistryDeleteBtn() {
  const { registries, removeAll } = useContext(RegistriesContext);

  if (registries.length === 0) {
    return null;
  }

  return (
    <div className="button-container">
      <button className="btnEliminar" onClick={() => removeAll()}>
        Borrar registros
      </button>
    </div>
  );
}

export default RegistryDeleteBtn;
