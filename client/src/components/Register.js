import React, {useState} from 'react'
import axios from 'axios'
import '../App.css'
import { useNavigate } from 'react-router'

const Register = () => {
let navigate = useNavigate()

    const [values, setValues] = useState({ name: '', username: '', password: " ", type: ''})

        const handleChange = (e) => {
           const { name, value } = e.target
           console.log('name',name);
           console.log('value',value);
            setValues({
                ...values,
                [name]: value
            })
            return {handleChange, values}
        } 

    const onSubmit = (e) => {
        console.log();
        e.preventDefault()
        axios
        .post('http://localhost:5000/api/auth/register', values)
        .then((resp) => {
            console.log('resp', resp)
            localStorage.setItem('token', resp.data.token)
            navigate('/login')
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
                <input type="text" name="name" values={values.name}  onChange={handleChange} />
                <label>Username:</label>
                <input type="text" name="username" values={values.username} onChange={handleChange} />
                <label>Password:</label>
                <input type="password" name="password" values={values.password}  onChange={handleChange}  />
                <label>Role</label>
                <input type='checkbox' name="Member" value="member" onChange={handleChange} /><label>Member</label>
                <input type='checkbox' name="Instructor" value="instructor" onChange={handleChange}/><label>Instructor</label>
                <button>Register</button>
                </form>
               
            <p> Already Registered</p>
      </div>
    )
}

export default Register