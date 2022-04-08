import axios from 'axios'
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import { useEffect } from 'react'
import Login from './components/Login'

// const Register = () => {
//   return <h2>Register</h2>
// }

// const Classes = () => {
//   return <h2>Classes</h2>
// }

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
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Gym Ratz</h1>
      </header>
    
      <Login />
      {/* <PrivateRoute exact path="/protected" component={FriendsList} /> */}

        {/* <Route path='/friendsList' component={FriendsList} /> */}
    

      {/* <Route path="/login" component={Login }/> */}
    </div>
 
  )
}

export default App
