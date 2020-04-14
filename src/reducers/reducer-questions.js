import { GET_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from "../actions/actionTypes";

export default function questions(state = {}, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        case ADD_QUESTION:
            const { question } = action
            return {
                ...state,
                [action.question.id] : question
            };
        case ADD_ANSWER :
            return {
                ...state,
                [action.qid] : {
                    ...state[action.qid],
                    [action.answer] : {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }

        default:
            return state
    }
}