import  Header  from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import { useState } from 'react';
import Results from './components/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState({initialInvestment: 10000, annualInvestment: 1200, expectedReturn: 6, duration: 10})
  const inputIsValid = userInput.duration > 0;

  function handleChange(field, newValue) {
        setUserInput(prevState => ({...prevState, [field]: +newValue}));
    }
  
  return (
  <>
    <Header/>
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p className='center'>Please enter a duration greater than 0</p>}
      {inputIsValid && <Results userInput={userInput}/>} 
  </>
  )
}

export default App
