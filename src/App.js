import './App.scss';
import Logo from './logo.png';
//pages
import { HomePage, CharactersPage } from 'pages';

//hooks
import { useTranslation } from 'react-i18next';
//react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { SearchEngine } from 'components/SearchEngine';
//redux
//redux
import { Provider } from 'react-redux';
import { createStore } from 'store';

function App() {
  //TODO App no debe saber esto, quiero crear un componente
  const [t, i18n] = useTranslation('global');
  const handleLgn = () => {
    i18n.language === 'es'
      ? i18n.changeLanguage('en')
      : i18n.changeLanguage('es');
  };
  return (
    <Provider store={createStore()}>
      <div className="App">
        <Router>
          <div className="nav-container">
            <div>
              <p>{t('nav.theme')}</p>
              <label className="switch">
                <input type="checkbox" onChange={handleLgn} />
                <span className="slider round"></span>
              </label>
            </div>
            <SearchEngine />
          </div>
          <figure>
            <Link to="/">
              <img alt="Breaking Bad logo" src={Logo} />
            </Link>
          </figure>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/personajes">
              <CharactersPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
