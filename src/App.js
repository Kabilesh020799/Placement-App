import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import ProfileForm from './components/studentProfileForm/profileForm';
import {BrowserRouter as Router,Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
    
    <Router>
    <Switch>
      <Route exact path="/"><Login/></Route>
      <Route exact path='/profile'><ProfileForm/></Route>
    </Switch>
    </Router>
    
    </div>
  );
}

export default App;
