import './App.scss';
import { HomePage, CharactersPage } from 'pages';
//react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//redux
import { Provider } from 'react-redux';
import { createStore } from 'store';
//bootstrap
import { Container } from 'react-bootstrap';
import { NavApp } from 'components/NavApp/NavApp';
import { DetailsCharacter } from 'pages/DetailsCharacter';

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
            <Route exact path="/personajes">
              <CharactersPage />
            </Route>
            <Route exact path="/personajes/:name">
              <DetailsCharacter />
            </Route>
          </Switch>
        </Router>
      </Container>
    </Provider>
  );
}

export default App;
