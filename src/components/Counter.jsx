import React from 'react';
import '../stylesheets/Counter.css'

function Counter({ numClicks }) {
  return (
    <div className='counter'>
      {numClicks}
    </div>
  );
}

export default Counter;

/* 
Step 3: 
- Create the Counter component
- Add the class
- Instead of props, we use destructuring to create numCliks
- We add the brackets with numclicks as a value
*/