function Registry({ patente, typev, fecha_registro }) {
  return (
    <tr>
      <td>{patente}</td>
      <td>{typev}</td>
      <td>{fecha_registro}</td>
    </tr>
  );
}

export default Registry;
