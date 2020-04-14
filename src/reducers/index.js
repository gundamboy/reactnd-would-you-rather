import {combineReducers} from "redux";
import authedUser from "./reducer-authedUser";
import users from "./reducer-users";
import questions from "./reducer-questions";
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    authedUser,
    users,
    questions,
    loadingBar: loadingBarReducer
})