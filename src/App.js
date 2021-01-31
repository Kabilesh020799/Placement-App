import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Student/Login/Login";
import ProfileForm from "./components/Student/studentProfileForm/profileForm";
import { BrowserRouter as Router, Switch } from "react-router-dom";

window.onbeforeunload = function () {
  localStorage.clear();
};

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/profile/:id">
            <ProfileForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
