import { useRef } from 'react';

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = shuffleArray([...answers]);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map(answer => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = '';
        if (answerState === 'answered' && isSelected) cssClasses = 'selected';
        if (
          (answerState === 'correct' || answerState === 'wrong') &&
          isSelected
        )
          cssClasses = answerState;
        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelect(answer)} className={cssClasses}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
