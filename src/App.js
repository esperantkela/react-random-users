import React , {useState, useEffect} from 'react';
import Profile from './components/Profile';

function App() {
  const  [count, setCount] = useState(1);

  useEffect(() => {
   
  });

  return (
    <div className="container">
        <h1 className='text-center'>Usememo()</h1>
        <button onClick={() => setCount(count + 1)} className='btn btn-primary mb-3'>Increment {count}</button>
        <button className='btn btn-dark mb-3 float-end'>changer</button>
      <Profile/>
    </div>
  );
}

export default App;
