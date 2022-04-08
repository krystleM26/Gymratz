import React, {useState} from 'react'
import '../App.css'
import axios from 'axios'

const Login = () => {
  
        
        const [credentials, setCredentials] = useState({ username: '', password: ""})
        const handleChange = (e) => {
            setCredentials({...credentials, [e.target.name]: e.target.value})
        }
    
    
        const onSubmit = (e) => {
            console.log(credentials);
            e.preventDefault()
            axios
            .post('http://localhost:5000/api/auth/login', credentials)
            .then((resp) => {
                console.log('resp', resp)
                localStorage.setItem('token', resp.data.token)
            })
            .catch((err) => {
                console.log(err)
            })
        }
        
        return (
            <div className='form'>
                <form onSubmit={onSubmit}>
                    <h2> LOGIN </h2>
                <label className='label'>USERNAME:</label>
                <input type="text" name="username" onChange={handleChange}/>
                <label className='label'> PASSWORD:</label>
                <input type="text" name= "password" onChange={handleChange}/>
                <button>Submit</button>
                <p> Not a member? <button>Sign Up Here</button></p>
                </form>
               
            </div>
        )
  

}


export default Login