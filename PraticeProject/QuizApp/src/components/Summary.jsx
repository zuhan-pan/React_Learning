import completeUrl from '../assets/quiz-complete.jpg';
import questions from '../questions';
import QUESTIONS from '../questions';

const questionLength = QUESTIONS.length;
export default function Summary({ userAnswers }) {
  const skippedPercent = Math.round(
    (userAnswers.reduce((acc, el) => {
      if (el === null) ++acc;
      return acc;
    }, 0) *
      100) /
      questionLength
  );

  const rightPercent = Math.round(
    (userAnswers.reduce((acc, el, index) => {
      if (el === QUESTIONS[index].answers[0]) ++acc;
      return acc;
    }, 0) *
      100) /
      questionLength
  );

  const wrongPercent = Math.round(
    (userAnswers.reduce((acc, el, index) => {
      if (el !== QUESTIONS[index].answers[0] && el !== null) ++acc;
      return acc;
    }, 0) *
      100) /
      questionLength
  );

  return (
    <div id="summary">
      <img src={completeUrl} alt="quiz is completed" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedPercent}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{rightPercent}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongPercent}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = 'user-answer';

          if (answer === null) {
            cssClass += ' skipped';
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += ' correct';
          } else {
            cssClass += ' wrong';
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
