import {combineReducers} from "redux";

export default combineReducers ({
    authedUser
})

function authedUser (state = null, action) {
    switch (action.type) {
        case "TEMP" :
            return action.id
        default :
            return state
    }
}