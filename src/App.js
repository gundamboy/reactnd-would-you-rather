import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {connect} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import NewQuestion from "./components/NewQuestion";
import Leaderboard from "./components/Leaderboard";
import Header from "./components/Header"
import {handleInitialData} from "./actions/actions-shared";
import QuestionView from "./components/QuestionView";

//TODO: Add Login
//TODO: Add Logout
//TODO: Need a 404 component
//TODO: Need a Header component with a nav bar
//TODO:

class App extends Component {
  componentDidMount() {
      // get the initial data, which allows the app to work
      this.props.dispatch(handleInitialData());
  }

  render() {
    return (
        <Router>
            <Header loggedIn={this.props.signedIn}/>
            {/*put loading bar here*/}
            {
                !this.props.signedIn ? <Login/> :
                    <>
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/question/:id' component={QuestionView} />
                    <Route path='/add-new-question' component={NewQuestion} />
                    <Route path='/leaderboard' component={Leaderboard} />
                    </>
            }
        </Router>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
    return {
        signedIn: authedUser !== null,
        authedUserName: authedUser ? users[authedUser].name : '',
        authedUserAvatar: authedUser ? users[authedUser].avatarURL : '',
    }
}

export default connect(mapStateToProps)(App);
