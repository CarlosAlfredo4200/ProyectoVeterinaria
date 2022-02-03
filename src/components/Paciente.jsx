import React from 'react';

const Paciente = ({paciente, setPacienteEdit, eliminarPaciente}) => {

    const{nombre, propietario, email, ingreso, sintomas, id} = paciente;

    const handleEliminar = () => {
     
        eliminarPaciente(id);
      
    }

  return  (
    <div className="m-3 px-3 py-5 rounded-xl bg-white shadow-md ">
    <p className="font-bold uppercase text-gray-700  ">
      {" "}
      Nombre:{""} <span className="font-normal  normal-case">{nombre}</span>
    </p>
    <p className="font-bold uppercase text-gray-700  ">
      {" "}
      Propietario:{""}{" "}
      <span className="font-normal  normal-case">{propietario}</span>
    </p>
    <p className="font-bold uppercase text-gray-700  ">
      {" "}
      Email:{""}{" "}
      <span className="font-normal  normal-case">
        {email}
      </span>
    </p>

    <p className="font-bold uppercase text-gray-700  ">
      {" "}
      Ingreso:{""}{" "}
      <span className="font-normal  normal-case">{ingreso}</span>
    </p>

    <p className="font-bold uppercase text-gray-700  ">
      {" "}
      Sintomas:{""}
      
      <span className="font-normal  normal-case pr-5  w-full text-sm ">
         {sintomas}
      </span>
    </p>

    <div className='flex flex-row-reverse'>
      <button 
      className='bg-red-700 p-2 text-center text-white font-bold uppercase text-xs border-2 px-2 mr-4 rounded-lg'
      onClick={handleEliminar}
      >Eliminar</button>
      
      <button 
      className='bg-yellow-400 p-2 text-center text-white font-bold uppercase text-xs border-2 rounded-lg'
      onClick={() => setPacienteEdit(paciente)}
      >Editar</button>

    </div>
  </div>
  )
;
};

export default Paciente;
