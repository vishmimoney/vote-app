import { GET_QUESTIONS } from '../actions';

const questionReducer = (state = { questions: [] }, { type, questions }) => {
    switch (type) {
        case GET_QUESTIONS:
            return Object.assign({}, state, { questions });
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