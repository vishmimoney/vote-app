import axios from 'axios';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_QUESTION_DETAILS = 'GET_QUESTION_DETAILS';
export const CREATE_QUESTION = 'CREATE_QUESTION';

const apiRootPath = 'https://polls.apiblueprint.org';

export const getQuestions = () => {
    return (dispatch) => {
        axios.get(`${apiRootPath}/questions`)
            .then((res) => {
                dispatch({
                    type: GET_QUESTIONS,
                    payload: { questions: res.data }
                });
            })
            .catch(err => console.log(err));
    }
}

export const getQuestionDetails = (questionUrl) => {
    return (dispatch) => {
        axios.get(`${apiRootPath}${questionUrl}`)
        .then((res) => {
            dispatch({
                type: GET_QUESTION_DETAILS,
                payload: { questionDetails: res.data }
            });
        })
        .catch(err => console.log(err));
    }
}