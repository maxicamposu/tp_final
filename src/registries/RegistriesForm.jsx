import { Formik, Form, Field } from "formik";
import { useContext } from "react";
import { RegistriesContext } from "../contexts/RegistriesContext";

function RegistriesForm() {
  const { add } = useContext(RegistriesContext);
  const tiposVehiculo = ["Moto", "Auto", "Pickup", "Bus", "Camion"];

  const getCurrentDateTime = () => {
    const now = new Date();
    const options = { timeZone: "America/Argentina/Buenos_Aires" };
    const fecha = now.toLocaleDateString("es-AR", options); 
    const hora = now.toLocaleTimeString("es-AR", { ...options, hour12: false });
    const [dia, mes, anioCompleto] = fecha.split("/");
    const anio = anioCompleto.slice(-2);
    return `${dia}/${mes}/${anio} ${hora}`;
  };

  return (
    <Formik
      initialValues={{ patente: "", typev: "", fecha_registro: "" }}
      validate={(values) => {
        const errors = {};

        if (!values.patente) {
          errors.patente = "La patente es requerida.";
        } else if (values.patente.length < 6 || values.patente.length > 7) {
          errors.patente = "La patente debe tener entre 6 y 7 caracteres";
        }

        if (!values.typev) {
          errors.typev = "El tipo de vehículo es requerido";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting, setTouched }) => {
        setTouched({
          patente: true,
          typev: true,
          fecha_registro: true
        }); 

      
        const currentDateTime = getCurrentDateTime();
        values.fecha_registro = currentDateTime;

        add(values.patente, values.typev, values.fecha_registro);
        setSubmitting(false);
        values.patente = "";
        values.typev = "";
        values.fecha_registro = currentDateTime;
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="form">
          <div>
            <label htmlFor="patente">Patente</label>
            <Field
              type="text"
              name="patente"
              maxLength="7"
            />
            {touched.patente && errors.patente ? (
              <p className="error-message">{errors.patente}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="typev">Tipo Vehículo</label>
            <Field as="select" name="typev">
              <option value="">Selecciona un tipo de vehículo</option>
              {tiposVehiculo.map((typev, index) => (
                <option key={index} value={typev}>
                  {typev}
                </option>
              ))}
            </Field>
            {touched.typev && errors.typev ? (
              <p className="error-message">{errors.typev}</p>
            ) : null}
          </div>
          <Field type="hidden" name="fecha_registro"></Field>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registrando" : "Registrar"}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default RegistriesForm;