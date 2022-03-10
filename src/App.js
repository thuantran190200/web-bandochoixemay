import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Thuận Trần";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thuận Trần
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

      <div>
      <h1>Họ tên: {name}</h1>
    </div>
    </div>
  );
}

function Menu(){
  const name = "Thuận Trần";
  
  return (
    <div>
      <h1>Họ tên: {name}</h1>
    </div>
  );
}

export default App;
