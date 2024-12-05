import logoUrl from '../assets/quiz-logo.png';

export default function Header() {
  return (
    <header>
      <img src={logoUrl} alt="a logo of react quiz" />
      <h1>React Quiz</h1>
    </header>
  );
}
