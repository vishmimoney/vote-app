import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestionDetails } from '../../actions';

class QuestionDetails extends Component {
    componentDidMount() {
        this.props.getQuestionDetails(this.props.id);
    }

    render() {
        return (
            <div className="container">
                <h3 className="row">Question Details</h3>
                <div className="divider"></div>
                <div className="section">
                    <h5>Question:</h5>
                    <h6 className="question-details-question-text">{this.props.questionDetails.question}</h6>
                </div>

                <div className="section">
                    <h5>Choose your answer:</h5>
                </div>
                <div className="row collection question-details-choice-collection">
                    {
                        this.props.questionDetails.choices && this.props.questionDetails.choices.map((elem, i) => {
                            return (
                                <div className="row collection-item question-details-choice-row" key={i}>
                                    <div className="col m5 s6">{elem.choice}</div>
                                    <div className="col m2 s3">{elem.votes} Votes</div>
                                    <div className="col m2 s3">{Math.round((elem.votes / this.props.totalVotes) * 100)}%</div>
                                    <div className="col m3 s12">
                                        <div className="progress question-details-choice-vote-percent">
                                            <div className="determinate" style={{ width: `${Math.round((elem.votes / this.props.totalVotes) * 100)}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="col m12 center question-details-action-panel">
                    <a className="white-text  waves-effect waves-light btn">
                        <i className="material-icons left">save</i>
                        Save vote
                </a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const questionData = { questionDetails: state.questionDetails };

    if (questionData.questionDetails.choices) {
        questionData.totalVotes = state.questionDetails.choices.reduce(
            (result, choice) => result + choice.votes,
            0);
    }

    return questionData;
}

export default connect(mapStateToProps, { getQuestionDetails })(QuestionDetails);