import headerImg from '../../assets/react-core-concepts.png';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import './Header.css';

export default function Header() {
  const randomInt = Math.floor(Math.random() * 3);
  const description = reactDescriptions[randomInt];
  return (
    <header>
      <img src={headerImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
