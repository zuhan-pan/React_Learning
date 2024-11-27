const content = [
  [
    'React is extremely popular',
    'It makes building complex, interactive UIs a breeze',
    "It's powerful & flexible",
    'It has a very active and versatile ecosystem',
  ],
  [
    'Components, JSX & Props',
    'State',
    'Hooks (e.g., useEffect())',
    'Dynamic rendering',
  ],
  [
    'Official web page (react.dev)',
    'Next.js (Fullstack framework)',
    'React Native (build native mobile apps with React)',
  ],
];

const btnWhyReact = document.querySelector('#btn-why-react');
const btnCoreFeature = document.querySelector('#btn-core-features');
const btnResources = document.querySelector('#btn-resources');
const tabContent = document.querySelector('.tab-content');

function displayContent(items) {
  let listContent = '';
  for (const item of items) {
    listContent += `<li>${item}</li>`;
  }
  const markup = `<ul>${listContent}</ul>`;
  tabContent.innerHTML = '';
  tabContent.insertAdjacentHTML('afterbegin', markup);
}

function highlightButton(btn) {
  btnWhyReact.className = '';
  btnCoreFeature.className = '';
  btnResources.className = '';
  btn.className = 'active';
}

function handleClick(event) {
  const btnId = event.target.id;
  highlightButton(event.target);
  if (btnId === 'btn-why-react') {
    displayContent(content[0]);
  } else if (btnId === 'btn-core-features') {
    displayContent(content[1]);
  } else {
    displayContent(content[2]);
  }
}

displayContent(content[0]);

btnWhyReact.addEventListener('click', handleClick);
btnCoreFeature.addEventListener('click', handleClick);
btnResources.addEventListener('click', handleClick);
