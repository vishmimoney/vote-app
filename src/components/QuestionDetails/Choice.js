import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledChoiceRow = styled.div`
    cursor: pointer;
    margin-bottom: 5px !important

    ${props => props.selected && css`
        background-color: #00897b !important;
        color: white
    `}
`;

const StyledVotePercent = styled.div`
    height: 8px;
    margin: .5rem 0 0.5rem 0;
`;
class Choice extends Component {
    constructor(props) {
        super(props);
        this.selectChoice = this.selectChoice.bind(this);
    }

    selectChoice() {
        this.props.onSelect();
    }

    render() {
        return (
            <StyledChoiceRow className="row collection-item" onClick={this.selectChoice} selected={this.props.selected}>
                <div className="col m5 s6">{this.props.choice}</div>
                <div className="col m2 s3">{this.props.votes} Votes</div>
                <div className="col m2 s3">{this.props.votePercentage}%</div>
                <div className="col m3 s12">
                    <StyledVotePercent className="progress">
                        <div className="determinate" style={{ width: `${this.props.votePercentage}%` }}></div>
                    </StyledVotePercent>
                </div>
            </StyledChoiceRow>
        );
    }
}

Choice.propTypes = {
    choice: PropTypes.string.isRequired,
    votes: PropTypes.number,
    votesPercentage: PropTypes.number,
    selected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired
};

Choice.defaultProps = {
    choice: '',
    votes: 0,
    votesPercentage: 0,
    selected: false
};

export default Choice;