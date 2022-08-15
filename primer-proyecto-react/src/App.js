import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Titulo H1</h1>

      <Testimonio
      nombre='Shawn Wang'
      pais='Singapur'
      imagen='shawn'
      cargo='Ingeniero de Software'
      empresa='Amazon'
      testimonio='alsdhañhsdalsfhkljbdflgj' />

      <Testimonio
      nombre='Sarah Chima'
      pais='Nigeria'
      imagen='sara'
      cargo='Ingeniera de software'
      empresa='ChatDesk'
      testimonio='alsdhañhsdalsfhkljbdflgj' />

     <Testimonio
      nombre='Emma Bostian'
      pais='Suecia'
      imagen='emma'
      cargo='Ingeniera de Software'
      empresa='Spotify'
      testimonio='añslfkjñldskfjlñsdkgjdlkbvkfgjldf' />

     </div>
    </div>
  );
}

export default App;
