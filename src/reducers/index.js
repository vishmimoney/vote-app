import { GET_QUESTIONS, GET_QUESTION_DETAILS } from '../actions';

const questionReducer = (state = { questions: [], questionDetails: {} }, action) => {
    switch (action.type) {
        case GET_QUESTIONS:
            return Object.assign({}, state, { questions: action.payload.questions });
        case GET_QUESTION_DETAILS:
            return Object.assign({}, state, { questionDetails: action.payload.questionDetails });    
        default:
            return state;
    }

}

/* can add reducers to this as app grows
   can have them in seperate files, import here and combine
        import {combineReducers} from "redux";

        const rootReducer = combineReducers({
            questionReducer,
            ..
        });
*/

export default questionReducer;