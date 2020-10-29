import './App.scss';
import Logo from './logo.png';
import {Home} from "pages/Home"

function App() {
  return (
    <div className="App">
      <div className="nav-container">
        <figure>
          <img alt="Breaking Bad logo" src={Logo} />
        </figure>
        <p>Buscador 🔍</p>
      </div>
      <Home />
    </div>
  );
}

export default App;