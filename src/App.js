import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AdminDashboard from "./components/Admin/Dashboard/Dashboard";
import Dashboard from "./components/Student/studentProfileForm/Dashboard/Dashboard";
import StudentList from "./components/Admin/StudentsList/StudentList";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/profile/:id">
            <Dashboard />
          </Route>
          <Route
            path="/admin"
            component={() => <Login isAdmin={true} />}
            exact
          />
          <Route path="/admin/profile/:id" exact component={AdminDashboard} />
          <Route
            path="/admin/profile/:company_id/:id"
            component={StudentList}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
