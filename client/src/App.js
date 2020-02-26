import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navigate from "./components/Navigate"


function App() {

  
  
  return (
    <Router>
        <Navigate />
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/saved" component={Saved}/>
        </Switch>
    </Router>
  );
}

export default App;
