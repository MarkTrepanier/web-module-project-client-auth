import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/login';
import FriendsList from './components/friendsList';
import PrivateRoute from './components/Privateroute';
import FriendForm from './components/FriendForm';

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
      <PrivateRoute path='/friendform' component={FriendForm}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
