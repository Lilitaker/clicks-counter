import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import counterLogo from './images/click-counter-logo.png'
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manageClick = () => {
    setNumClicks(numClicks + 1);
  };

  const restartCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className='App'>
      <div className='logo-container'>
        <img className='click-logo' src={counterLogo} alt='Clicks counter logo' />
      </div>
      <div className='main-container'>
        <div className='buttons-container'>
          <Button 
            text='Click' 
            isClickBtn={true}
            manageClick={manageClick} />
          <Button
            text='Restart'
            isClickBtn={false}
            manageClick={restartCounter} />
        </div>
        <Counter numClicks={numClicks}/>
      </div>
    </div>
  );
}

export default App;

/* 
Step 2:
- Import Button component
- Add two Button components to the App
  - Add text and isClickBtn with their values
  - Create manageClick and restartCounter functions
  - Add manageClick with the functions above as values (the name of the attribute and functions can be different)

Step 4:
- Add one Counter component to the App
  - Import useState
  - Create a const that is gonna have a value (number) and a function that allows us to update the value. Between the parentheses we put the initial value.
  - Inside the manageClick function we use setNumClicks to update the value of numClicks
  - We add numClicks dynamically to the Counter component with the variable numClicks
  - Inside the restartCounter function we use setNumClicks to give the value 0 to numClicks variable
*/
