import { click } from '@testing-library/user-event/dist/click';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logoDeContadorDeClics from './imagenes/logo-contador-de-clics.png';
import { useState } from 'react';


function App() {


    const [numClics, setNumClics] = useState(0);

    const manejarClic = () => {
      setNumClics(numClics + 1);
    }

    const reiniciarContador = () => {
      setNumClics(0);
    }

  return (
    <div className='App'>
      <div className='logo-contador-de-clics-contenedor'>
        <img
          className='logo-contador-de-clics'
          src={logoDeContadorDeClics}
          alt='Logo de contador de clics'/>
      </div>
      <Contador numClics={numClics} />
      <div className='contenedor-principal'>
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton 
         texto='Reiniciar'
         esBotonDeClic={false}
         manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
