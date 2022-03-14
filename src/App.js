import Home  from './pages/home';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Thuận Trần";
  return <Home />;
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
