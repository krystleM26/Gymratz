
import React from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home'
import { useEffect } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Classes from './components/Classes'


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
 
    <Router>
      <div className="App">
        <nav>

      <ul>
        <li>
          <Link to='/'>HOME</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/register'>Register Today!</Link>
        </li>
        <li>
          <Link to='/classes'>Classes!</Link>
        </li>
      </ul>
        </nav>
      <Routes>
      <Route exact path='/' element={< Home />}></Route>
      <Route exact path='/login' element={< Login />}></Route>
      <Route exact path='/register' element={< Register />}></Route>
      <Route exact path='/' element={< Classes />}></Route>
      </Routes>
      </div>

    </Router>
    
     
    
      
      
     
   
 
  )
}

export default App
