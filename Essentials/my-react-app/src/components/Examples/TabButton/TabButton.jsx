import './TabButton.css';

export default function TabButton({ isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {props.children}
      </button>
    </li>
  );
}
