import { combineReducers } from "redux";
import { 
    GET_QUESTIONS, 
    GET_QUESTION_DETAILS, 
    SELECT_CHOICE, 
    SAVE_VOTE } from '../actions';

const initialState = {
    questions: [],
    questionDetails: {}
};

const questionsListReducer = (state = initialState.questions, action) => {
    switch (action.type) {
        case GET_QUESTIONS:
            return action.questions;
        default:
           return state;
    }

}

const questionDetailsReducer = (state = initialState.questionDetails, action) => {
    switch(action.type) {
        case GET_QUESTION_DETAILS:
            const questionData = action.questionDetails;

            if (questionData.choices) {
                const totalVotes = questionData.choices.reduce((result, choice) =>
                    result + choice.votes, 0
                );

                questionData.choices.map((choice) => {
                    choice.selected = false;
                    choice.votePercent = (totalVotes && Math.round((choice.votes / totalVotes) * 100)) || 0;

                    return choice;
                });
            }

            return Object.assign({}, state, questionData);

        case SELECT_CHOICE:
            const choiceSelections = state.choices.map((choice, i) => {
                if(i === action.index) {
                    choice.selected = true;
                }
                else{
                    choice.selected = false;
                }
            
                return choice;
            });

            return Object.assign({}, state, { choices: choiceSelections });
        case SAVE_VOTE:
            const totalVotes = state.choices.reduce((result, choice) =>
                    result + choice.votes, 0
                );
                
            const updatedVotes = state.choices.map(choice => {
                if(choice.url === action.vote.url) {
                     choice.votes = action.vote.votes;
                     choice.votePercent = (totalVotes && Math.round((choice.votes / totalVotes) * 100)) || 0;
                }
        
                return choice;
            });

            return Object.assign({}, state, { choices: updatedVotes }); 
        default:
            return state;    
    }
}

const rootReducer = combineReducers({
    questions: questionsListReducer,
    questionDetails: questionDetailsReducer
});

export default rootReducer;