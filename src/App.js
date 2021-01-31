import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import ProfileForm from "./components/Student/studentProfileForm/profileForm";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AdminForm from "./components/Admin/adminForm/adminForm";

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
          <Route
            path="/admin"
            component={() => <Login isAdmin={true} />}
            exact
          />
          <Route path="/admin/profile/:id" exact component={AdminForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
