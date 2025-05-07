import Titulo from './components/Titulo';
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
        <Titulo titulo='Uniendo cambios desde GIT' />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Esto es codigo hecho por Boris</h1>
        <h2>Esto es codigo hecho por Boris volumen 2</h2>
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
