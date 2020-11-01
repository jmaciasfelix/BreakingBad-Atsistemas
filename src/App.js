import './App.scss';
//pages
import {
  HomePage,
  CharactersPage,
  KillersPage,
  SeasonsPage,
  DetailsEpisode,
  DetailsCharacter,
} from 'pages';
//react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//redux
import { Provider } from 'react-redux';
import { createStore } from 'store';
//bootstrap
import { Container } from 'react-bootstrap';
//components
import { NavApp } from 'components/NavApp/NavApp';

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
            <Route exact path="/characters">
              <CharactersPage />
            </Route>
            <Route exact path="/characters/:name">
              <DetailsCharacter />
            </Route>
            <Route exact path="/seasons">
              <SeasonsPage />
            </Route>
            <Route exact path="/seasons/:id/episode/:id">
              <DetailsEpisode />
            </Route>
            <Route path="/killers">
              <KillersPage />
            </Route>
          </Switch>
        </Router>
      </Container>
    </Provider>
  );
}

export default App;
