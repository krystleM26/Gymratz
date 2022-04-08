import React, {useState} from 'react'
import '../App.css'
import axios from 'axios'

const Login = () => {
  
        
        const [credentials, setCredentials] = useState({ username: '', password: ""})
        const handleChange = (e) => {
            setCredentials({...credentials, [e.target.name]: e.target.value})
        }
    
    
        const onSubmit = (e) => {
            e.preventDefault()
            axios
            .post('http://localhost:3000/api/auth/login', credentials)
            .then((resp) => {
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
                <input type="text" name= "username" onChange={handleChange}/>
                <button>Submit</button>
                </form>
               
            </div>
        )
  

}


export default Login