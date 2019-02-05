import React from 'react';
import QuizItem from './QuizItem';
import './quiz.scss';

const QuizList = (props) => {
  const questionNumber = props.questionNumber;
  const score = props.score;
  const onCorrectAnswer = props.onCorrectAnswer;
  const onQuestionUpdate = props.onQuestionUpdate;

  const quizItemArray = props.quizQuestions.map((question) => {  
    return (
      <QuizItem 
        key={question.index}
        questionNumber={questionNumber}
        score={score}
        onCorrectAnswer={onCorrectAnswer}
        onQuestionUpdate={onQuestionUpdate}
        question={question.question} 
        incorrect={question.incorrect_answers} 
        correct={question.correct_answer} />
    );
  });

  return (
    <div>
      {quizItemArray[questionNumber]}
    </div>
  );
}

export default QuizList;