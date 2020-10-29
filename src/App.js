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
          <Link to="/">
            <figure>
              <img alt="Breaking Bad logo" src={Logo} />
            </figure>
          </Link>
          <p>Buscador 🔍</p>
        </div>
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
