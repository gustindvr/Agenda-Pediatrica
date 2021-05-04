import React, {Fragment, useState, useEffect} from 'react';
import { Grid } from 'semantic-ui-react';
import FormPatient from './components/Form/FormPatient';
import ViewPatients from './components/ViewPatients/ViewPatients';


import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {

  //Local storage
  let reservasIniciales = JSON.parse(localStorage.getItem('agenda'));
  if(!reservasIniciales){
    reservasIniciales = [];
  }

  
  //Guardar la reserva
  const [agenda, setAgenda] = useState(reservasIniciales);
 
 
  //UseEffect para visualizar los diferentes cambios en el state
  useEffect(() => {
    if(reservasIniciales){
      localStorage.setItem('agenda', JSON.stringify(agenda));
    }else {
      localStorage.setItem('agenda', JSON.stringify([]));
    }
  },[agenda, reservasIniciales]);
  

  //Administrar la reserva
  const crearReserva = patient => {
    setAgenda([
      ...agenda,
      patient
    ])
  }

  //Eliminar la reserva
  const eliminarReserva = legajo => {
    const nuevaLista = agenda.filter( patient => patient.legajo !== legajo )
    setAgenda(nuevaLista)
  }

    //Titulo condicional 
    const titulo = agenda.length === 0 ? 'No hay pacientes agendados' : 'Administra tus reservas';


  return (
    <Fragment>
      <h1>Agregar consultas</h1>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column width={8}>
            <FormPatient 
              crearReserva={crearReserva}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <h2>{titulo}</h2>
              {agenda.map( patient => (
                <ViewPatients
                  key = {patient.legajo} 
                  patient= {patient}
                  eliminarReserva={eliminarReserva}
                />
              ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>


    </Fragment>
  );
}

export default App;
