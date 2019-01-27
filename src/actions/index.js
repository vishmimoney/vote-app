import axios from 'axios';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_QUESTION_DETAILS = 'GET_QUESTION_DETAILS';
export const CREATE_QUESTION = 'CREATE_QUESTION';
export const SELECT_CHOICE = 'SELECT_CHOICE';
export const SAVE_VOTE = 'SAVE_VOTE';
export const QUESTION_FIELD_CHANGE = 'QUESTION_FIELD_CHANGE';
export const ADD_CHOICE = 'ADD_CHOICE';

const apiRootPath = 'https://polls.apiblueprint.org';

export const getQuestions = () => {
    return (dispatch) => {
        axios.get(`${apiRootPath}/questions`)
            .then((res) => {
                dispatch({
                    type: GET_QUESTIONS,
                    questions: res.data
                });
            })
            .catch(err => console.log(err));
    }
}

export const getQuestionDetails = (id) => {
    return (dispatch) => {
        axios.get(`${apiRootPath}/questions/${id}`)
            .then((res) => {
                dispatch({
                    type: GET_QUESTION_DETAILS,
                    questionDetails: res.data
                });
            })
            .catch(err => console.log(err));
    }
}

export const selectChoice = (index) => {
    return {
        type: SELECT_CHOICE,
        index
    }
}

export const saveVote = (vote) => {
    return (dispatch) => {
        axios.post(`${apiRootPath}${vote.url}`, {
            url: vote.url,
            votes: 1,
            choice: vote.choice
        })
        .then((res) => {
            dispatch({
                type: SAVE_VOTE,
                vote: res.data
            });
        })
        .catch(err => console.log(err));

    }
}

export const createQuestion = ({ question, choices }) => {
    return (dispatch) => {
        axios.post(`${apiRootPath}/questions`, {
            question,
            choices
        })
        .then((res) => {
            dispatch({
                type: CREATE_QUESTION,
                question: res.data
            });
        })
        .catch(err => console.log(err));
    }
}

export const questionFieldChange = (questionText) => {
    return {
        type: QUESTION_FIELD_CHANGE,
        questionText
    }
}

export const addChoice = (choice) => {
    return {
        type: ADD_CHOICE,
        choice
    }
}