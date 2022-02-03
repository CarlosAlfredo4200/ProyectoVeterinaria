import React, {useEffect} from 'react';
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPacienteEdit, eliminarPaciente }) => {
  return  (
    <div className="mx-3 md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h1 className="font-black text-2xl text-center">Listado Pacientes</h1>
          <p className="text-base mt-2 mb-4 text-center">
            Información del {""}
            <span className="text-indigo-600 font-bold">Paciente</span>
          </p>

          {pacientes.map((crearTargetaInfoPorAnimal) => (
            <Paciente 
            setPacienteEdit={setPacienteEdit}
            key={crearTargetaInfoPorAnimal.id}
            paciente={crearTargetaInfoPorAnimal}
            eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h1 className="font-black text-3xl text-center">
            No hay pacientes registrados{" "}
          </h1>
          <p className="text-base mt-5 mb-10 text-center">
            Agregar nuevo {""}
            <span className="text-indigo-600 font-bold">Paciente para listar</span>
          </p>
        </>
      )}
    </div>
  );

};

export default ListadoPacientes;
