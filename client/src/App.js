
import './App.css';
import logo from './img/logo.png'
import axios from 'axios'
import {useEffect} from 'react'

function App() {


  useEffect(()=>{
    axios.get('http://localhost:5000/api/instructor/login')
    .then(data =>{
      console.log('client',data)
    })
    .catch(err => console.log(err))
  },[])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Gym Ratz</h1>
      </header>
    </div>
  );
}

export default App;
