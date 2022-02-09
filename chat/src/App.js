import './assests/css/App.css';
import Conexion from './componets/Conexion';
import Traer from './componets/mostrar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Conexion/>
      <Traer/>
      </header>
    </div>
  );
}
export default App;