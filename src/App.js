import './App.scss';
import Logo from './logo.png';
import { Home } from 'pages/Home';

function App() {
  return (
    <div className="App">
      <div className="nav-container">
        <p>Tema 🌙</p>
        <p>Buscador 🔍</p>
      </div>
      <figure className="app-logo">
        <img alt="Breaking Bad logo" src={Logo} />
      </figure>
      <Home />
    </div>
  );
}

export default App;
