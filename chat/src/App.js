import './assests/css/App.css';
import Conexion from './componentes/Conexion';
import Traer from './componentes/mostrar';
import Login from './componentes/Login';
import Enrutar from './componentes/Enrutamiento';
function App(){
  return (
    <div className="App">
      <header className="App-header">
        <Login/>
        <Conexion/>
        <Traer/>
      </header>
    </div>
  );
}
export default App;