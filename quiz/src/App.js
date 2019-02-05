import React, { Component } from 'react';
// https://github.com/axios/axios
// import axios from 'axios';
import QuizList from './components/QuizList';

class App extends Component {
  constructor(props) {
    super(props);
    
    // Bind the this context to the handler function
    this.correctAnswer = this.correctAnswer.bind(this);
    this.questionUpdate = this.questionUpdate.bind(this);

    this.state = {
      questions: [],
      questionNumber: 0,
      score: 0
    };

    // use this later when selecting quiz
    this.getQuestions(14, 'medium');
  }

// *** BUG *** componentWillNotMount!
  // componentDidMount() {
  //   axios.get('https://opentdb.com/api.php?amount=10&category=14&difficulty=medium&type=multiple')
  //     .then(data => this.setState({
  //       questions: data.results
  //     }))
  //     .catch(error => this.setState({
  //       error
  //     }));
  //     console.log('error ',this.state.error)
  //     console.log('questions ',this.state.questions)
  // }

  correctAnswer(scoreUpdate) {
    this.setState({
      score: scoreUpdate
    });
  }

  questionUpdate(questionUpdate) {
    this.setState({
      questionNumber: questionUpdate
    });
  }

  getQuestions(cat, diff) {
    fetch(`https://opentdb.com/api.php?amount=10&category=${cat}&difficulty=${diff}&type=multiple`)
      .then(response => response.json())
      .then(data => this.setState({ questions: data.results }));
  }

  render() {
    return (
      <div>
        <QuizList 
          quizQuestions={this.state.questions}
          questionNumber={this.state.questionNumber}
          score={this.state.score} 
          onCorrectAnswer={this.correctAnswer}
          onQuestionUpdate={this.questionUpdate}/>
      </div>
    );
  }
}

export default App;
