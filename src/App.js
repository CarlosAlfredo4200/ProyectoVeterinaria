import React, { useState, useEffect } from "react";
import './App.css';

import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";



function App() {
  const [pacientes, setPacientes] = useState([]);
  const [pacienteEdit, setPacienteEdit] = useState({});


  useEffect(() => {
    const obtenerLocalStorage = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes'))??[];
      setPacientes(pacientesLS); 
    }
    obtenerLocalStorage();
  }, []);
  
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes]);
  


  const eliminarPaciente = (id) =>{
    const pacientesActualizados = pacientes.filter( pacientes => pacientes.id !== id);
    setPacientes(pacientesActualizados)
    
  }


  return  (
    <div className="bg-gray-200 ">
      <Header h1="Segumiento Pacientes" span="Veterinaria" />

      <div className="  mt-5 md:flex container mx-auto">
        <Formulario  
        setPacientes = {setPacientes}
        pacientes ={pacientes} 
        pacienteEdit={pacienteEdit}  
        setPacienteEdit = {setPacienteEdit}
        />


        <ListadoPacientes 
        pacientes={pacientes} 
        setPacienteEdit={setPacienteEdit}
        eliminarPaciente={eliminarPaciente}  
        />
      </div>
    </div>
  );

}

export default App;
