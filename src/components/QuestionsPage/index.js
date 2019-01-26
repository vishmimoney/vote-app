import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../../actions';
import styled from 'styled-components';
import QuestionCard from './QuestionCard';
import moment from 'moment';

const StyledNewButton = styled.a`
   @media only screen and (min-width: 600px) {
        margin-top: 32px;
}`;

class QuestionsPage extends Component {

    componentDidMount() {
        this.props.getQuestions();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m4">
                        <h3 className="teal-text text-darken-4 left">Questions</h3>
                    </div>
                    <div className="col s4 m4 offset-m4">
                        <StyledNewButton className="cyan darken-4 white-text waves-effect waves-light btn btn-block right">
                            <i className="material-icons left">add</i> New Question
                        </StyledNewButton>
                    </div>
                </div>
                <div className="row">
                    {
                        this.props.questions.map(({ question, published_at, choices, url }, i) => {
                            return (
                                <QuestionCard
                                    question={question}
                                    timestamp={moment(published_at).format('MMMM Do YYYY, h:mm:ss a')}
                                    choices={choices.length}
                                    url={url}
                                    key={i}>
                                </QuestionCard>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { questions: state.questions };
};

export default connect(mapStateToProps, { getQuestions })(QuestionsPage);