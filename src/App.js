import React , {useState, useEffect, useMemo} from 'react';
import Profile from './components/Profile';
import axios from 'axios'

function App() {
  const  [count, setCount] = useState(1);
  const  [profile, setProfile] = useState({});
  const  [dark, setDark] = useState(false);

  useEffect(() => {
   axios
      .get(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then(response=>{
        setProfile(response.data)
      })
      .catch(error =>{
        console.log(error)
      })
  }, [count]);

  const memoiseValue = useMemo(()=>{
    console.log('je suis dans isOverTen')
    return count > 10
  }, [count]);


  const goDark = ()=>{
    setDark(!dark)

    if(!dark){
      document.body.classList.add("bg-secondary")
    }else{
      document.body.classList.remove("bg-secondary")
    }
  }
  const btnTheme = dark ? 'btn-light' : 'btn-dark'
  const textBtnTheme = dark ? 'rendre claire' : 'rendre sombre'

  return (
    
    <div className="container">
        <h1 className='text-center'>User random()</h1>
        {memoiseValue && <div className='alert alert-danger' role='alert'>STOP !!</div>}
        <button onClick={() => setCount(count + 1)} className='btn btn-primary mb-3'>Increment {count}</button>
        <button className={`btn ${btnTheme} mb-3 float-end`} onClick={goDark}>{textBtnTheme}</button>
      <Profile count={count} profile={profile}/>
    </div>
  );
}

export default App;
