import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/login';

function App() {
  return (
    <Router>
    <div>
      <h1>_hey, whats up?</h1>
      <Route>
        <Login/>
      </Route>
    </div>
    </Router>
  );
}

export default App;
