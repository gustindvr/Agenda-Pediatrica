import React from 'react'
import { Button, Card } from 'semantic-ui-react';

import './ViewPatients.css';

const ViewPatients = ({patient, eliminarReserva}) => {
  
  //Desestructurando la información del paciente
  const {legajo, paciente, familia, fecha, hora, descripcion} = patient;

  return (
    <Card color="green">
      <Card.Content>
        <p>Paciente: <span>{paciente}</span></p>
        <p>Familiar: <span>{familia}</span></p>
        <p>Fecha del turno: <span>{fecha}</span></p>
        <p>Hora: <span>{hora}</span></p>
        <p>Descripción: <span>{descripcion}</span></p>
        <Button
          type="button"
          onClick={() => eliminarReserva(legajo)}
          color="green"
        >Eliminar</Button>
      </Card.Content>
    </Card>
  )
}

export default ViewPatients
