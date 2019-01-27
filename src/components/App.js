import React, { Component } from 'react';
import QuestionsPage from './QuestionsPage';
import QuestionDetails from './QuestionDetails';
import CreateQuestion from './CreateQuestion';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={QuestionsPage} />
          <Route path="/question/new" exact component={CreateQuestion}></Route>
          <Route path="/questions/:id" exact render={({ match }) =>
            <QuestionDetails id={match.params.id}></QuestionDetails>
          } />
        </div>
      </Router>
    );
  }
}

export default App;
