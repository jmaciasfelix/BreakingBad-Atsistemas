import './App.scss';
import Logo from './logo.png';
//component
import { Home } from 'pages/Home';
//hooks
import { useTranslation } from 'react-i18next';
//react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [t, i18n] = useTranslation('global');
  const handleLgn = () => {
    i18n.language === 'es'
      ? i18n.changeLanguage('en')
      : i18n.changeLanguage('es');
  };
  return (
    <div className="App">
      <Router>
        <div className="nav-container">
          <div>
            <p>{t('nav.theme')}</p>
            <label class="switch">
              <input type="checkbox" onChange={handleLgn} />
              <span class="slider round"></span>
            </label>
          </div>
          <p>{t('nav.search')}</p>
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
