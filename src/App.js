import Receta from './components/Receta';
import logo from './logo.svg';
//import './App.css';
//Comentario de prueba
//Comentario de prueba 2
//Comentario de prueba 3
//Comentario de prueba 4

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Receta/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
