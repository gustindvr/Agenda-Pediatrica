import React, {Fragment, useState} from 'react';
import { Button, Form, Message } from 'semantic-ui-react';

import './FormPatient.css';

const FormPatient = ({crearReserva}) => {

  //State de carga de página
  const [isLoading, setIsLoading] = useState(false)

  //State que crea los valores default que serán ingresados en el form
  const [patient, setPatient] = useState({
    legajo: '',
    paciente: '',
    familiar: '',
    fecha:'',
    hora:'',
    descripcion: ''
  })

  //State error
  const [error, setError] = useState(false)

  //Función que cambia el state  del paciente
  const asignState = e => {
    setPatient({
      ...patient,
      [e.target.name] : e.target.value 
    })

  } 

  //Desestructurando el state de patient
  const {legajo, paciente, familiar, fecha, hora, descripcion} = patient;


  //Función que envía el formulario con los datos del paciente
  const sendPatient = e => {
    e.preventDefault();

    //Inicia la carga 
    setIsLoading(true);

    //Validación del formulario
    if(legajo.trim() === '' || paciente.trim() === '' || familiar.trim() === '' || fecha.trim() === '' || hora.trim() === '' || descripcion.trim() === '' ){
      setError(true)
      setIsLoading(false);
      return;
    }

    //Volver a cambiar el State de error para eliminar el mensaje
    setError(false);

    //crear la reserva
    crearReserva(patient);

    //reiniciar formulario
    setPatient({
      legajo: '',
      paciente: '',
      familiar: '',
      fecha:'',
      hora:'',
      descripcion: ''
    })

    //Cerrar el loading
    setIsLoading(false);

  }

  return (
    <Fragment>

      {error ? <Message negative><Message.Header>Por favor complete todos los campos</Message.Header> </Message> : null}

      <Form onSubmit={sendPatient}>
        <Form.Group>
          <Form.Input 
            label='N° de historia' 
            type='text' 
            name='legajo'
            placeholder='xxxx-xxxx'
            value={legajo}
            onChange={asignState}
          />
          <Form.Input 
            label='Nombre del paciente' 
            type='text' 
            name='paciente'
            placeholder='Ingrese el nombre del paciente'
            value={paciente}
            onChange={asignState}
          />
          <Form.Input 
            label='Nombre del familiar' 
            type='text' 
            name='familiar'
            placeholder='Ingrese el nombre del familiar'
            value={familiar}
            onChange={asignState}
          />
          <Form.Input 
            label='Fecha' 
            type='date' 
            name='fecha'
            value={fecha}
            onChange={asignState}
          />
          <Form.Input 
            label='Hora del turno' 
            type='time' 
            name='hora'
            value={hora}
            onChange={asignState}
          />
           <Form.TextArea 
            className='textarea'
            label='Descripción' 
            name='descripcion'
            value={descripcion}
            onChange={asignState}
          />
        </Form.Group>
      <Button color='green' loading={isLoading} type='submit'>Agendar</Button>
      </Form>
    </Fragment>
  )
}

export default FormPatient;
