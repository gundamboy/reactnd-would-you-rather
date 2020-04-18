import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {connect} from "react-redux";
import LoadingBar from 'react-redux-loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import NewQuestion from "./components/NewQuestion";
import Leaderboard from "./components/Leaderboard";
import Header from "./components/Header"
import {handleInitialData} from "./actions/actions-shared";
import QuestionView from "./components/QuestionView";


class App extends Component {
  componentDidMount() {
      // get the initial data, which allows the app to work
      const { dispatch, loading } = this.props
      if (loading === true) {
          dispatch(handleInitialData())
      }
  }

  render() {
    return (
        <Router>
            <LoadingBar/>
            {
                !this.props.signedIn
                    ?
                    <>
                    <Login/>
                    </>
                    :
                    <>
                    <Header
                        loggedIn={this.props.signedIn}
                        username={this.props.authedUserName}
                        avatar={this.props.authedUserAvatar}
                        characterClass={this.props.characterClass}
                    />
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/question/:id' component={QuestionView} />
                    <Route path='/add' component={NewQuestion} />
                    <Route path='/leaderboard' component={Leaderboard} />
                    </>
            }
        </Router>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
    return {
        loading: authedUser === null,
        signedIn: authedUser !== null,
        authedUserName: authedUser ? users[authedUser].name : '',
        authedUserAvatar: authedUser ? users[authedUser].avatarURL : '',
        characterClass: authedUser ? users[authedUser].characterClass : ''
    }
}

export default connect(mapStateToProps)(App);
