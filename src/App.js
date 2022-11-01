import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <div className="container">
      <h1 className='text-center'>Usememo</h1>
        <button className='btn btn-info mb-3'>Increment</button>
        <button className='btn btn-dark mb-3 float-right'>changer</button>
      <Profile/>
    </div>
  );
}

export default App;
