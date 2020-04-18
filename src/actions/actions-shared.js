import { getInitialData } from "../utils/api";
import { getQuestions } from "./actions-questions";
import { getUsers } from "./actions-users";
import {hideLoading, showLoading} from "react-redux-loading";

export const handleInitialData = () => {
    return (dispatch) => {
        dispatch(showLoading());

        return getInitialData()
            .then(({users, questions }) => {
            dispatch(getUsers(users));
            dispatch(getQuestions(questions));
            dispatch(hideLoading());
        })
    }
};