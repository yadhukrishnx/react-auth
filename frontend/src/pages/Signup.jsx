import { useState } from "react";
import { Link } from "react-router-dom";
import Validation from './Validations'

function Signup() {
  
  const [values,setValues]  = useState({
    email : '',
    password : ''
  })
  const [errors,setErrors] = useState({})
  const handleInput = (event) => {
    setValues( prev => ({...prev,[event.target.name] : [event.target.value]}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values))
  }


  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <h1>This is Registeration</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' onChange={handleInput} placeholder="Enter Name" />
        </div>

        <div >
          <label htmlFor="email">Email</label>
          <input type="text" name='email' onChange={handleInput} placeholder="Enter Email" />
          {errors.email && <span className='text-danger'>{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleInput} placeholder="Enter Email" />
        </div>

        <button className="btn btn-success">Sign Up now</button>
      </form>
      <Link to="/" className="text-decoration-none">
        Login Now
      </Link>
    </div>
  );
}

export default Signup;
