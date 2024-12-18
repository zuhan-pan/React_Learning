import QuestionTimer from './questionTimer';
import Answers from './Answers';
import { useState } from 'react';
import QUESTIONS from '../questions';

const TIMER = 10000;
export default function Question({
  activeQuestionIndex,
  onSelectAnswer,
  onSkipAnwser,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null,
  });
  
  let timer = TIMER;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectedAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[activeQuestionIndex].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = '';
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  }
  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeOut={answer.selectedAnswer === '' ? onSkipAnwser : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <Answers
        answers={QUESTIONS[activeQuestionIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectedAnswer}
      />
    </div>
  );
}
