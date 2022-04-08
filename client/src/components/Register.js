// import React, {useState} from 'react'
// import axios from 'axios'
// import '../App.css'

// const Register = () => {
//     console.log('hey')
//     const [values, setValues] = useState({ username: '', password: ""})

//         const handleChange = (e) => {
//            const { name, value } = e.target
//             setValues({
//                 ...values,
//                 [name]: value
//             })
//         } 
//         return {handleChange, values}

//     const onSubmit = (e) => {
//         console.log(values);
//         e.preventDefault()
//         axios
//         .post('http://localhost:5000/api/auth/register', values)
//         .then((resp) => {
//             console.log('resp', resp)
//             localStorage.setItem('token', resp.data.token)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
//     }
    
//     return (
//         <div>
//             <h2>Register</h2>
//             <form >
//                 <label>Name:</label>
//                 <input type="text" name="name" values={values.name} onChange={handleChange} />
//                 <label>Username:</label>
//                 <input type="text" name="username" values={values.username} onChange={handleChange} />
//                 <label>Password:</label>
//                 <input type="password" name="password" values={values.password} onChange={handleChange}  />
//                 <label>Role</label>
//                 <input type='checkbox' name="Member"  />
//                 <input type='checkbox' name="Instructor" />
//                 <button>Register</button>
                
//             </form>
//             <p> Already Registered</p>
//         </div>
//     )
// }

// export default Register