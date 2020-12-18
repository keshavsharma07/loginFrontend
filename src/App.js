
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light top-fixed">
          <div className="container">
            <Link className="side navbar-brand" to={"/sign-in"} >Welcome</Link>
            <div className="collapse navbar-collapse" id="navbarToggle">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>Sign Up</Link>
                </li>
              </ul>

            </div>
          </div>
        </nav>

        {/* Routing ****************/}

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Login}></Route>
              <Route exact path='/sign-in' component={Login}></Route>
              <Route exact path='/sign-up' component={SignUp}></Route>
            </Switch>

          </div>
        </div>

      </div>
    </Router>
  );
}

export default App;