import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

const StyledCard = styled.div`
    min-height: 300px !important;
    cursor: pointer
`;

class QuestionCard extends Component {
    constructor(props) {
        super(props);
        this.state = { redirect: false };
        this.selectQuestion = this.selectQuestion.bind(this);
    }

    selectQuestion() {
        this.setState({ redirect: true });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to={this.props.url} />;
        }
        
        return (
            <StyledCard className="col s6 m4" onClick={this.selectQuestion} >
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

QuestionCard.propTypes = {
    question: PropTypes.string.isRequired,
    timestamp: PropTypes.string,
    choices: PropTypes.array.isRequired,
    url: PropTypes.string.isRequired
}

QuestionCard.defaultProps = {
    question: '',
    choices: [],
    url: ''
}

export default QuestionCard;