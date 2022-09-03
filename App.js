//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import ReactDOM from "react-dom/client";
//import "Signup"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
//import App from "./App";
import Login from "./Login.js";
import Signup from "./Signup.js";
function App() {

  return (
    
<BrowserRouter className= "body">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">UPPCL</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Login </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">SignUp</Link>
      </li>
     
    </ul>
  
  </div>
</nav>

<Routes>
  <Route path="/" element={<Login />} />
   <Route path="/signup" element={<Signup />} />
</Routes>
</BrowserRouter>

  );
}

export default App;