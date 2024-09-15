import { useContext } from "react";
import { RegistriesContext } from "../contexts/RegistriesContext";
import Registry from "./Registry";

function RegistriesList() {
  const { registries } = useContext(RegistriesContext);

  if (registries.length === 0) {
    return null;
  }

  return (
    <table class="table">
      <thead>
        <tr>
          <th>Patente</th>
          <th>Tipo de Vehiculo</th>
          <th>Fecha Registro</th>
        </tr>
      </thead>
      <tbody>
        {registries.map((r) => (
          <Registry
            key={r.id}
            id={r.id}
            patente={r.patente}
            typev={r.typev}
            fecha_registro={r.fecha_registro}
          />
        ))}
      </tbody>
    </table>
  );
}

export default RegistriesList;
