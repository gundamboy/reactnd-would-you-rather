import { GET_QUESTIONS } from "./actionTypes";

export const getQuestions = (questions) => {
    return {
        type: GET_QUESTIONS,
        questions
    }
};