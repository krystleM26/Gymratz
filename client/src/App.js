import axios from 'axios'
import { render } from 'react-dom'


import { useEffect } from 'react'
import Login from './components/Login'


function App() {
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/auth')
      .then((data) => {
        console.log('client', data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
 

    <div className="App">
    
      <header className="App-header">
      
        <h1>Gym Ratz</h1>
       
      <nav>
        <ul>
          <li>Home</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </nav>
      </header>
    
       <Login />
     
    </div>
 
  )
}

export default App
