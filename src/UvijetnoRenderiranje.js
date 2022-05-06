import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {(new Date().getMinutes() % 2 == 0 && (
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        )) || <p>U neparnoj sam minuti!</p>}

        <h1>Browser koji koristim:</h1>
        {window.chrome ? <p>je google chrome</p> : <p>nije google chrome</p>}
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
