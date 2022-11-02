import React , {useState} from 'react';
import Profile from './components/Profile';

function App() {
  const  [count, setCount] = useState(1);
  return (
    <div className="container">
      <h1 className='text-center'>Usememo</h1>
        <button onClick={() => setCount(count + 1)} className='btn btn-info mb-3'>Increment {count}</button>
        <button className='btn btn-dark mb-3 float-right'>changer</button>
      <Profile/>
    </div>
  );
}

export default App;
