import axios from 'axios';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_QUESTION_DETAILS = 'GET_QUESTION_DETAILS';
export const CREATE_QUESTION = 'CREATE_QUESTION';
export const SELECT_CHOICE = 'SELECT_CHOICE';

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