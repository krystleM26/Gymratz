import React, {useState} from 'react'
import axios from 'axios'
import '../App.css'

const Register = () => {
    console.log('hey')
    const [values, setValues] = useState({ username: '', password: ""})

        const handleChange = (e) => {
           const { name, value } = e.target
            setValues({
                ...values,
                [name]: value
            })
            return {handleChange, values}
        } 

    const onSubmit = (e) => {
        console.log(values);
        e.preventDefault()
        axios
        .post('http://localhost:5000/api/auth/register', values)
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
            <h2>Register Form</h2>
                <form onSubmit={onSubmit}>

                <label>Name:</label>
                <input type="text" name="name"  onChange={handleChange} />
                <label>Username:</label>
                <input type="text" name="username"  onChange={handleChange} />
                <label>Password:</label>
                <input type="password" name="password"  onChange={handleChange}  />
                <label>Role</label>
                <input type='checkbox' name="Member"  /><label>Member</label>
                <input type='checkbox' name="Instructor" /><label>Instructor</label>
                <button>Register</button>
                </form>
               
            <p> Already Registered</p>
      </div>
    )
}

export default Register