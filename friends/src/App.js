import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/login';
import FriendsList from './components/friendsList';
import PrivateRoute from './components/Privateroute';

function App() {
  return (
    <Router>
    <div>
      <h1>_hey, whats up?</h1>
      <Switch>
      <Route path='/login'>
        <Login/>
      </Route>

      <PrivateRoute path='/friendslist' component={FriendsList}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
