import React, { Component } from "react";
import { connect } from 'react-redux';
import {createQuestion, questionFieldChange, addChoice } from '../../actions';
import materialize from 'materialize-css/dist/js/materialize.min';

class CreateQuestion extends Component {
    constructor(props) {
        super(props);
        this.choices = [];
        this.handleQuestionFieldChange = this.handleQuestionFieldChange.bind(this);
        this.handleChoiceKeyPress = this.handleChoiceKeyPress.bind(this);
        this.createQuestion = this.createQuestion.bind(this);
    }

    handleQuestionFieldChange(event) {
         this.props.questionFieldChange(event.target.value);
    }

    handleChoiceKeyPress(event) {
        if (event.key === 'Enter') {
            this.props.addChoice(event.target.value);
            event.target.value = '';
          }
    }

    createQuestion() {
        this.props.createQuestion(this.props.draftQuestion);
     /* displaying toaster message before createQuestion action completes. can be improved to
        display toaster after the async action is completed. */
        materialize.toast({ html: 'Question created successfully!'});
    }

    render() {
        return (
            <div className="container">
                <h3 className="row">Create Question</h3>
                <div className="divider"></div>
                <div className="section">
                    <h5>What do you have in mind?</h5>
                    <div className="input-field col s6">
                        <input id="question-title" type="text" className="validate" value={this.props.draftQuestion.question} onChange={this.handleQuestionFieldChange} />
                        <label htmlFor="question-title">Question title</label>
                    </div>
                </div>

                <div className="col m12">
                    <h5>Available choices:</h5>
                </div>
                <div className="row collection">
                {this.props.draftQuestion.choices.map((choice, i) => {
                    return <div className="collection-item teal lighten-5 create-question-choice-row" key={i}>{choice}</div>;
                })}
                </div>
                { this.props.draftQuestion.choices.length === 0 && <div className="col m12">
                    <div className="create-question-no-choices-message">
                        No choices yet! Add a new choice below.
                    </div>
                </div>}
                <div className="col m8">
                    <div className="input-field collection-item">
                        <input id="choice-input" type="text" className="validate" onKeyPress={this.handleChoiceKeyPress} />
                                <label htmlFor="choice-input">Type and press Enter to add a new choice</label>
                    </div>
                </div>
                <div className="col m3 s4 xl3 l3 center" onClick={this.createQuestion}>
                    { /* eslint-disable-next-line */ }
                    <a className="waves-effect waves-light btn"><i className="material-icons left">save</i>Create Question</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
   return { draftQuestion: state.draftQuestion };
}

export default connect(mapStateToProps, {createQuestion, questionFieldChange, addChoice}) (CreateQuestion);