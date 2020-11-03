import './App.css';
//pages
import {
  HomePage,
  CharactersPage,
  KillersPage,
  SeasonsPage,
  DetailsEpisode,
  DetailsCharacter,
  Four0Four,
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
import { Theme } from 'components/Theme';

function App() {
  return (
    <Provider store={createStore()}>
      <Theme>
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
              <Route>
                <Four0Four />
              </Route>
            </Switch>
          </Router>
        </Container>
      </Theme>
    </Provider>
  );
}

export default App;
