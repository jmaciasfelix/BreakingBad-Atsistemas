import './App.scss';
import { HomePage, CharactersPage } from 'pages';
//react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//redux
import { Provider } from 'react-redux';
import { createStore } from 'store';
//bootstrap
import { Container } from 'react-bootstrap';
//components
import { NavApp } from 'components/NavApp/NavApp';
//page
import { DetailsCharacter } from 'pages/DetailsCharacter';
import { SeasonsPage } from 'pages/Seasons';

function App() {
  return (
    <Provider store={createStore()}>
      <Container>
        <Router>
          <NavApp />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/character">
              <CharactersPage />
            </Route>
            <Route exact path="/character/:name">
              <DetailsCharacter />
            </Route>
            <Route exact path="/seasons">
              <SeasonsPage />
            </Route>
          </Switch>
        </Router>
      </Container>
    </Provider>
  );
}

export default App;
