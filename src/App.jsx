import './App.css'
import Card from './components/Card'
import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [cancion, setCancion] = useState("");
  const [errorInput, setErrorInput] = useState("");
  const [displayCard, setDisplayCard] = useState(false);

  function handleSubmit(e){
      e.preventDefault();

      if(nombre.trim().length > 2 && !nombre.includes(" ") && cancion.length >= 6){
        setNombre(nombre);
        setCancion(cancion);
        setDisplayCard(true);
        setErrorInput("");
      }
      else{
        setErrorInput("Por favor chequea que la información sea correcta")
      }
  }
  

  function onChangeInputNombre(e){
    setNombre(e.target.value)
  }

  function onChangeInputCancion(e){
    setCancion(e.target.value)
  }

  return (
    <>
      <div>
        <h1>Cuál es tu canción favorita?</h1>
        <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor=""> Nombre </label>
                    <input 
                        type="text" 
                        placeholder='Ingresá tu nombre'
                        onChange={onChangeInputNombre}
                        value={nombre}
                    />
                </div>

                <div>
                <label htmlFor=""> Canción </label>
                    <input 
                        type="text" 
                        placeholder='Ingresá tu canción favorita'
                        onChange={onChangeInputCancion}
                        value={cancion}
                    />
                </div>

                <div className="error">{errorInput}</div>

                <button type='submit'>Enviar</button>
        </form>

        {displayCard && <Card
          nombre={nombre}
          cancion={cancion}
        />}

      </div>
    </>
  )
}

export default App;
