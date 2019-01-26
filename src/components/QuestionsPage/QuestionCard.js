import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getQuestionDetails } from '../../actions';

const StyledCard = styled.div`
    min-height: 300px !important;
`;

class QuestionCard extends Component {
    constructor(props) {
        super(props);
        this.selectQuestion = this.selectQuestion.bind(this);
    }

    selectQuestion() {
        this.props.getQuestionDetails(this.props.url);
    }

    render() {
        return (
            <StyledCard className="col s6 m4"  onClick={this.selectQuestion} >
                <div className="card cyan darken-4 z-depth-5">
                    <div className="card-content white-text">
                        <div className="card-title">{this.props.question}</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col m12">{this.props.timestamp}</div>
                            </div>
                            <div className="row">
                                <div className="col m12">
                                    <div className="chip">{this.props.choices} Choices</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </StyledCard>
        );
    }
}

export default connect(null, {getQuestionDetails})(QuestionCard);