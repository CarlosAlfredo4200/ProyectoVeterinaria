import React, {useState, useEffect} from 'react';
import Error from "./error";


const Formulario = ({ pacientes, setPacientes, pacienteEdit, setPacienteEdit }) => {

    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [ingreso, setIngreso] = useState("");
    const [sintomas, setSintomas] = useState("");
  
    const [error, setError] = useState(false);
  
  
    useEffect(() => {
      if (Object.keys(pacienteEdit).length > 0 ){
         setNombre(pacienteEdit.nombre);
         setPropietario(pacienteEdit.propietario);
         setEmail(pacienteEdit.email);
         setIngreso(pacienteEdit.ingreso);
         setSintomas(pacienteEdit.sintomas)
      }
      else{
  
      }
    }, [pacienteEdit]);
    
  
    //Generar id unico
  
    const generarId = () =>{
      const random = Math.random().toString(36).substring(2);
      const fecha = Date.now().toString(36)
      return random + fecha;
  
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      //Validación
      if ([nombre, propietario, email, ingreso, sintomas].includes("")) {
        setError(true);
        return;
      }
      setError(false);
  
      //crear objeto paciente
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        ingreso,
        sintomas,
      };
      
      //validacion para la edicion
      if(pacienteEdit.id ){
        objetoPaciente.id = pacienteEdit.id;
        const pacienteActualizado = pacientes.map(pacienteState=> pacienteState.id === pacienteEdit.id ? objetoPaciente : pacienteState )
  
        setPacientes(pacienteActualizado);
        setPacienteEdit({})
      }
      else{
        
        objetoPaciente.id= generarId();
        setPacientes([...pacientes, objetoPaciente]);
      }
  
  
      setNombre("");
      setPropietario("");
      setEmail("");
      setIngreso("");
      setSintomas("");
    };
  
  
  return  (
    <div className=" md:w-1/2 lg:w-2/5">
      <h1 className="font-black text-2xl text-center">Seguimiento Pacientes</h1>
      <p className="text-base mt-2 text-center mb-4">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-5 px-5  mb-10"
      >
        {error && (
          <Error>
            <h2 className="text-xl">¡Error!</h2>
            <p className="text-xs ">Todos los campos son obligatorios</p>
          </Error>
        )}

        <div className="mb-3">
          <label
            htmlFor="mascota"
            className="block text-gray-700 text-xs uppercase font-bold"
          >
            Nombre de la mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2  text-sm rounded-md pla"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 text-xs uppercase font-bold"
          >
            Nombre propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre propietario"
            className="border-2 w-full p-2  text-sm rounded-md"
            onChange={(e) => setPropietario(e.target.value)}
            value={propietario}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 text-xs uppercase font-bold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="border-2 w-full p-2  text-sm rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="ingreso"
            className="block text-gray-700 text-xs uppercase font-bold"
          >
            Ingreso
          </label>
          <input
            id="ingreso"
            type="date"
            className="border-2 w-full p-2 text-sm rounded-md"
            onChange={(e) => setIngreso(e.target.value)}
            value={ingreso}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 text-xs uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Descripción de los sintomas"
            className="border-2 w-full p-2 mt-2 rounded-md"
            onChange={(e) => setSintomas(e.target.value)}
            value={sintomas}
          />

          <input
            type="submit"
            className="border-2 w-full p-2  uppercase text-white rounded-md font-bold bg-indigo-600 hover:bg-indigo-500 cursor-pointer transition-all"
            value={ pacienteEdit.id ?  'Editar paciente ' : 'Agregar paciente'}
          />
        </div>
      </form>
    </div>
  );

};

export default Formulario;
