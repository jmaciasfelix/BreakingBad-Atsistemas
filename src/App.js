import './App.scss';
import Logo from './logo.png';
//component
import { Home } from 'pages/Home';
//react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav-container">
          <p>Tema 🌙</p>
          <p>Buscador 🔍</p>
        </div>
        <Link to="/">
          <figure>
            <img alt="Breaking Bad logo" src={Logo} />
          </figure>
        </Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
