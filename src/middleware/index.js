import thunk from 'redux-thunk';
//import logger from './logger';
import {applyMiddleware} from "redux";

// commented out a copy WITH the logger in case I need to remember it
// export default applyMiddleware (
//     thunk,
//     logger,
// )

// thunk only, no logger so there are not console messages in production
export default applyMiddleware (
    thunk
)