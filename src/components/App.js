import React, { Component } from 'react';
import '../styles/App.css';
import QuestionsPage from './QuestionsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuestionsPage></QuestionsPage>
      </div>
    );
  }
}

export default App;
