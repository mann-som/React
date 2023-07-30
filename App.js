// import logo from './logo.svg';
import './App.css';
// import { ReactDOM } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavScrollExample from './nav';
import 'bootstrap/dist/css/bootstrap.css';
// import patients from './Patients';
// import Patientsfunc from './Patients';
import Servicesfunc from './Services';
import Patients from './Patients';
import contactusform from './Contactus';
// import { Switch, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <NavScrollExample />
      {/* <Patientsfunc /> */}
      <Router> {/* Add the Router here */}
        <Switch> {/* Correct the capitalization of Switch and Route */}
          <Route exact path="/Services" component={Servicesfunc} />
          <Route exact path="/Patients" component={Patients} />
          <Route exact path="/Contactus" component={contactusform} />
        </Switch>
      </Router>
      {/* <contactusform /> */}
    </div>
  );
}

export default App;
