import React, { Component } from "react";

class CreateQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            choices: []
        };
        this.handleQuestionFieldChange = this.handleQuestionFieldChange.bind(this);
        this.handleChoiceKeyPress = this.handleChoiceKeyPress.bind(this);
    }

    handleQuestionFieldChange(event) {
         this.setState({
            question: event.target.value
        });
    }

    handleChoiceKeyPress(event) {
        if (event.key === 'Enter') {
            this.setState({ choices: [...this.state.choices, event.target.value]});
            event.target.value = '';
          }
    }

    render() {
        return (
            <div className="container">
                <h3 className="row">Create Question</h3>
                <div className="divider"></div>
                <div className="section">
                    <h5>What do you have in mind?</h5>
                    <div className="input-field col s6">
                        <input id="question-title" type="text" className="validate" onChange={this.handleQuestionFieldChange} />
                        <label htmlFor="question-title">Question title</label>
                    </div>
                </div>

                <div className="col m12">
                    <h5>Available choices:</h5>
                </div>
                <div className="row collection">
                {this.state.choices.map((choice, i) => {
                    return <div className="collection-item teal lighten-5 create-question-choice-row" key={i}>{choice}</div>;
                })}
                </div>
                { this.state.choices.length === 0 && <div className="col m12">
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
                <div className="col m3 s4 xl3 l3 center">
                    { /* eslint-disable-next-line */ }
                    <a className="waves-effect waves-light btn"><i className="material-icons left">save</i>Create Question</a>
                </div>
            </div>
        );
    }
}

export default CreateQuestion;