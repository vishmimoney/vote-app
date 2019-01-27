import { combineReducers } from "redux";
import { 
    GET_QUESTIONS, 
    GET_QUESTION_DETAILS, 
    SELECT_CHOICE, 
    SAVE_VOTE,
    CREATE_QUESTION,
    QUESTION_FIELD_CHANGE,
    ADD_CHOICE } from '../actions';

const initialState = {
    questions: [],
    questionDetails: {},
    draftQuestion: {
        question: '',
        choices: []
    }
};

const questionsListReducer = (state = initialState.questions, action) => {
    switch (action.type) {
        case GET_QUESTIONS:
            return action.questions;
        default:
           return state;
    }
};

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
            let totalVotes = state.choices.reduce((result, choice) =>
                    result + choice.votes, 0
                );
                
            const updatedVotes = state.choices.map(choice => {
                if(choice.url === action.vote.url) {
                     choice.votes = action.vote.votes;
                }
                //calculte percentage for each choice after total votes increment
                totalVotes += 1;
                choice.votePercent = (totalVotes && Math.round((choice.votes / (totalVotes)) * 100)) || 0;
        
                return choice;
            });

            return Object.assign({}, state, { choices: updatedVotes }); 
        default:
            return state;    
    }
};

const createQuestionReducer = (state = initialState.draftQuestion, action) => {
    switch (action.type) {
        case CREATE_QUESTION:
            return initialState.draftQuestion;
        case QUESTION_FIELD_CHANGE:
            return Object.assign({}, state, {question: action.questionText});
        case ADD_CHOICE:
            return Object.assign({}, state, {choices: [...state.choices, action.choice]});   
        default:
           return state;
    }

}

const rootReducer = combineReducers({
    questions: questionsListReducer,
    questionDetails: questionDetailsReducer,
    draftQuestion: createQuestionReducer
});

export default rootReducer;