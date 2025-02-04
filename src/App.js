import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './component/Home';
import Employee from './component/Employee/Employee';
import AddEmployee from './component/AddEmployee/AddEmployee';


function App() {   

  return (
      <div className="container">
          <Router>
              <div className="col-md-12">
                  <h1 className="text-center" style={style}></h1>
                  <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/home" exact component={Home} />
                      <Route path="/Employees" exact component={Employee} />
                      <Route path="/AddEmployee" exact component={AddEmployee} />
                 
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
