import axios from 'axios';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_QUESTION = 'GET_QUESTION';
export const CREATE_QUESTION = 'CREATE_QUESTION';

export const getQuestions = () => {
    return (dispatch) => {
        axios.get('https://polls.apiblueprint.org/questions')
            .then((res) => {
                dispatch({
                    type: GET_QUESTIONS,
                    questions: res.data
                });
            })
            .catch(err => console.err(err));
    }
}