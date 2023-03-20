
import { useState } from "react";
import React from "react";
import { BaseColaboradores } from "./BaseColaboradores";


function App() {

  const [colaboradores,setColaboradores] = useState(BaseColaboradores);
  const[nuevoColaborador, setNuevoColaborador] = useState({
    id:"",
    nombre: "",
    correo: ""
  });

  const[busqueda, setBusqueda] = useState("");

  const agregarColaborador = (e) => {
    e.preventDefault();

    if (nuevoColaborador.nombre === "" || nuevoColaborador === ""){
      return alert("Faltan campos por llenar");
    }
  
    setColaboradores([...colaboradores, nuevoColaborador ]);
    
    setNuevoColaborador({
      id:"",
      nombre: "",
      correo: ""
    });

  }

  //colaborador 1 || olaborad
  const colaboradoresFiltrados = colaboradores.filter((colaborador) =>  {
    if(colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase())){
      return true;
    }

    return false;
    
  });

  return (
    <div>
    <nav>
      <h1>Buscar un colaborador</h1>
      <input 
        className="form-control mx-2 my-3" 
        placeholder="Buscar..."
        onChange={(e) => setBusqueda(e.target.value)}
        value={busqueda}
      />
    </nav>

    <form action="" onSubmit={agregarColaborador}>
      <h3>Agregar un Colaborador</h3>
      <div className="informacion mt-3">
          <label>Nombre del colaborador</label>
          <input
            className="form-control me-2 my-3"
            type="text"
            onChange={(e) => setNuevoColaborador({
              id: Date.now(),
              nombre: e.target.value,
              correo: nuevoColaborador.correo
            })}
            value={nuevoColaborador.nombre}
          />
      </div>

      <div className="informacion mt-3">
      <label>Correo del colaborador</label>
      <input
        className="form-control me-2 my-3"
        type="email"
        onChange={(e) => setNuevoColaborador({
          id: Date.now(),
          nombre: nuevoColaborador.nombre,
          correo: e.target.value
        })}
        value={nuevoColaborador.correo}
      />
      </div>

      <button
        className="btn btn-dark"
        type="submit"
      >
        Agregar
      </button>
    </form>

    <div className="colab mt-3">
      <h3>Listado de colaboradores</h3>

      <ul>
          {colaboradoresFiltrados.map(({id, nombre, correo}) => <li key={id}>{nombre} | {correo}</li>)}
      </ul>
    </div>
      
    </div>
  );
}

export default App;
