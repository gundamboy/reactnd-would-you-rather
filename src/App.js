import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import NewQuestion from "./components/NewQuestion";
import Leaderboard from "./components/Leaderboard";
import Header from "./components/Header";

//TODO: Add Login
//TODO: Add Logout
//TODO: Need a 404 component
//TODO: Need a Header component with a nav bar
//TODO:

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
        <Router>
            <Header/>
            {/*put loading bar here*/}

            <Route path='/' exact component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/new-question' component={NewQuestion} />
            <Route path='/leaderboard' component={Leaderboard} />
        </Router>
    )
  }
}

export default App;
