
import {Formik, Form,Field, ErrorMessage} from 'formik';
import { useContext } from 'react';
import { NotesContext } from '../contexts/NotesContext';

function NotesForm(){

    const { add } = useContext(NotesContext);

    return(
        <Formik
        
        initialValues={{title:"",message:""}}
        
        validate={ values=>{

            const errors = {}

            if(!values.title){
                errors.title = "El titulo es requerido";

            }else if(!values.message){
                errors.message = "El mensaje es requerido";
            }

            return errors;
        }}

        onSubmit={
            (values,{setSubmitting})=>{
                add(values.title,values.message);
                setSubmitting(false);
                values.title = "";
                values.message = "";
            }
        }

        >
        {
            ({isSubmitting})=>(
                <Form className='form'>
                <div>
                    <label htmlFor="title">Titulo</label>
                    <Field type="text" name="title"></Field>
                    <ErrorMessage name="title" className='error-message' component="p"/>
                </div>

                <div>
                    <label htmlFor="message">Mensaje</label>
                    <Field component="textarea" name="message"></Field>
                </div>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando mensaje" : "Enviar mensaje"}
                </button>

            </Form>
            )
        }
        </Formik>
    );
}

export default NotesForm;