import Header from './components/header';
import UserInput from './components/userInput';
import Result from './components/Result';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = formData.duration >= 1;

  function handleInputChange(e) {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: +value };
    setFormData(updatedData);
  }

  return (
    <div>
      <Header />
      <UserInput formData={formData} onChange={handleInputChange} />
      {!inputIsValid && (
        <p className="center">Please make duration more than 0</p>
      )}
      {inputIsValid && <Result updatedData={formData} />}
    </div>
  );
}

export default App;
