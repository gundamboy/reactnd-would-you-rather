import { GET_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from "./actionTypes";
import { showLoading, hideLoading } from "react-redux-loading";
import {saveQuestion, saveQuestionAnswer} from "../utils/api";

export const getQuestions = (questions) => {
    return {
        type: GET_QUESTIONS,
        questions
    }
};

export function saveAnswer(authedUser, qid, answer) {
    return {
        type: ADD_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function handleAddQuestionAnswer(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());

        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        }).then(() => {
            dispatch(saveAnswer(authedUser, qid, answer))
        }).then(() => {
            dispatch(hideLoading())
        });
    }
}

export const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question
    }
};

export const handleAddQuestion = (optionOneText, optionTwoText) => {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        // show the loading bar
        dispatch(showLoading());

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        }).then((question) => {

            console.log("action - handleAddQuestion question: ", question);
            dispatch(addQuestion(question))
        }).then(() => {
            dispatch(hideLoading())
        });
    }
};
