import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/main.css"
/* components */
import Logo from "./components/logo"
import Alert from "./components/alert"
import Mapshow from "./components/mapshow"
import Login from "./components/login"
import City from "./components/city"
import Normalmap from "./components/normalmap"

function App() {
  return (
    <div className="main">
      <Router>
          <Route path="/" exact component={Logo} />
          <Route path="/login" exact component={Login} />
          <Route path="/city" exact component={City} />
          <Route path="/normalmap" exact component={Normalmap} />
          <Route path="/alert" exact component={Alert} />
          <Route path="/map" exact component={Mapshow}/>
      </Router>
    </div>
  );
}

export default App;

