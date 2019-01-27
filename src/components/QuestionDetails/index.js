import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestionDetails, selectChoice, saveVote } from '../../actions';
import Choice from './Choice';
import styled from 'styled-components';

const StyledQuestionText = styled.h6`
    padding: 10px 0;
`;

const StyledChoiceCollection = styled.div`
     border: none;
`;
const StyledActionPanel = styled.div`
     margin-bottom: 40px !important;
`;
class QuestionDetails extends Component {
    constructor(props) {
        super(props);
        this.saveVote = this.saveVote.bind(this);
    }

    componentDidMount() {
        this.props.getQuestionDetails(this.props.id);
    }

    onSelectChoice(choiceIndex) {
        this.props.selectChoice(choiceIndex);
    }

    saveVote() {
        const vote = this.props.questionDetails.choices.find(choice => choice.selected);
        if(vote){
            this.props.saveVote(vote);
        }
        else{
            alert("Please select a choice to vote");
        }
    }

    render() {
        return (
            <div className="container">
                <h3 className="row">Question Details</h3>
                <div className="divider"></div>
                <div className="section">
                    <h5>Question:</h5>
                    <StyledQuestionText>{this.props.questionDetails.question}</StyledQuestionText>
                </div>

                <div className="section">
                    <h5>Choose your answer:</h5>
                </div>
                <StyledChoiceCollection className="row collection">
                    {
                        this.props.questionDetails.choices && this.props.questionDetails.choices.map((elem, i) => {
                            return (
                                <Choice
                                    choice={elem.choice}
                                    votes={elem.votes}
                                    votePercentage={elem.votePercent}
                                    onSelect={this.onSelectChoice.bind(this, i)}
                                    selected={elem.selected}
                                    key={i}
                                ></Choice>
                            );
                        })
                    }
                </StyledChoiceCollection>
                <StyledActionPanel className="col m12 center">
                    <a className="white-text  waves-effect waves-light btn" onClick={this.saveVote}>
                        <i className="material-icons left">save</i>
                        Save vote
                    </a>
                </StyledActionPanel>
            </div>
        );
    }
}

QuestionDetails.propTypes = {
    questionDetails: PropTypes.object.isRequired
}

QuestionDetails.defaultProps = {
    questionDetails: {}
}

const mapStateToProps = (state) => {
    return { questionDetails: state.questionDetails };
}

export default connect(mapStateToProps, { getQuestionDetails, selectChoice, saveVote })(QuestionDetails);