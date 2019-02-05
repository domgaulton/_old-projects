import React from 'react';
// import QuizQuestions from './QuizQuestions';

function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
  	const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QuizItem = (props) => {

	const questions = [];
	const questionNumber = props.questionNumber;
	const questionTitle = props.question;
	const incorrectAnswer = props.incorrect;
	const correctAnswer = props.correct;

	const score = props.score;
	const onCorrectAnswer = props.onCorrectAnswer;
	const onQuestionUpdate = props.onQuestionUpdate;

	questions.push(incorrectAnswer[0],incorrectAnswer[1],incorrectAnswer[2], correctAnswer);
	//questions = correctAnswer.concat(incorrectAnswer);
	const shuffled = shuffleArray(questions);

	function checkAnswer(userAnswer) {
		// console.log(userAnswer);
		if (userAnswer === correctAnswer) {
			const scoreUpdate = score +1;
			onCorrectAnswer(scoreUpdate);
		}
		console.log(correctAnswer);
		const questionNumberUpdate = questionNumber +1;
		onQuestionUpdate(questionNumberUpdate);
	}

  return (
		<div className='quiz'>
			<div className='quiz_number'>{questionNumber+1}/10</div>
			<div className='quiz_title'>{questionTitle}</div>
			<ul className='quiz_questions'>
				<li onClick={() => checkAnswer(shuffled[0])}>{shuffled[0]}</li>
				<li onClick={() => checkAnswer(shuffled[1])}>{shuffled[1]}</li>
				<li onClick={() => checkAnswer(shuffled[2])}>{shuffled[2]}</li>
				<li onClick={() => checkAnswer(shuffled[3])}>{shuffled[3]}</li>
			</ul>
			<div className='quiz_score'>Score: {score}</div>
		</div>
  );
}

export default QuizItem;