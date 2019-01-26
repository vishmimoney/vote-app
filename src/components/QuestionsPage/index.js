import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../../actions';
import styled from 'styled-components';

const StyledNewButton = styled.a`
   @media only screen and (min-width: 600px) {
        margin-top: 32px;
}`;

const StyledCard = styled.div`
    min-height: 300px !important;
`;

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
                        this.props.questions.map(({ question, published_at, choices }, i) => {
                            return (
                                <StyledCard className="col s6 m4" key={i}>
                                    <div className="card cyan darken-4 z-depth-5">
                                        <div className="card-content white-text questions-page-new-question-card">
                                            <div className="card-title">{question}</div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col m12">{published_at}</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col m12">
                                                        <div className="chip">{choices.length} Choices</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </StyledCard>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ questions }) => {
    return { questions };
};

export default connect(mapStateToProps, { getQuestions })(QuestionsPage);