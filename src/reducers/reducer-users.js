import { GET_USERS, ADD_ANSWER } from "../actions/actionTypes";

export default function users(state = {}, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users
            };
        case ADD_ANSWER: {
            return {
                ...state,
                [action.authedUser] : {
                    ...state[action.authedUser],
                    answers : {
                        ...state[action.authedUser].answers,
                        [action.qid] : action.answer
                    }
                }
            }
        }

        default:
            return state
    }
};
