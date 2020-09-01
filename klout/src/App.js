import React from 'react';
import './App.css';
//import ProjectList from './components/projects/ProjectList'
//import ProjectDetails from './components/projects/ProjectDetails'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
//import Map from './components/Map';
//import FileUpload from './components/FileUpload';


function App() {
  return (
    <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <h1>Esta es la homepage</h1>
          </Route>
          <Route exact path="/projects">
            ProjectList
          </Route>
         
          <Route exact path="/">
            Map
          </Route>
          <Route exact path="/">
            FileUpload
          </Route>
        </Switch>
    </div>
  );
}

export default App;
