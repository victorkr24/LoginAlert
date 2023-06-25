import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import swal from "sweetalert";

function App() {
  const [count, setCount] = useState(0);
  const mostrarAlerta = () => {
    swal({
      title: "Eliminar",
      text: "estas seguro que sedeas eliminar este archivo ",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      if (respuesta) {
        swal({
          text: "El archivo se ha borrado con exito  y se esta modificando desde la computadora de la",
          icon: "success",
          timer: 3000,
        });
      }
    });
  };

  return (
    <>
      <div>
        <a href="www.google.com">Este es un link</a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={() => mostrarAlerta()}>
        Mostrar Cambios desde Github
      </button>
    </>
  );
}

export default App;
