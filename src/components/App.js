import React, { Component } from 'react';
import '../styles/App.css';
import QuestionsPage from './QuestionsPage';
import QuestionDetails from './QuestionDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={QuestionsPage} />
          <Route path="/questions/:id" render={({ match }) =>
            <QuestionDetails id={match.params.id}></QuestionDetails>
          } />
        </div>
      </Router>
    );
  }
}

export default App;
