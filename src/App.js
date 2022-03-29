import './App.css';
import Button from './components/Button';
import counterLogo from './images/click-counter-logo.png'

function App() {

  const manageClick = () => {
    console.log('Click');
  }

  const restartCounter = () => {
    console.log('Restart');
  }

  return (
    <div className='App'>
      <div className='logo-container'>
        <img className='click-logo' src={counterLogo} alt='Clicks counter logo'/>
      </div>
      <div className='main-container'>
        <Button 
          text='Click' 
          isClickBtn={true}
          manageClick={manageClick}/>
        <Button
          text='Restart'
          isClickBtn={false}
          manageClick={restartCounter}/>
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
*/
