import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AllTeams from './components/AllTeams/AllTeams';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TeamDetails from './components/TeamDetails/TeamDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className = "bg-dark">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <AllTeams/>
          </Route>
          <Route path="/team/:idTeam">
            <TeamDetails/>
          </Route>
          <Route path="*">
          <NotFound/>
        </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
