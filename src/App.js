import { BrowserRouter as Router, Route } from "react-router-dom";
//import Employee from './components/pages/employee.js';
import NavTabs from './components/NavTabs';
import Search from './components/pages/search';
import './App.css';
//import { Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;