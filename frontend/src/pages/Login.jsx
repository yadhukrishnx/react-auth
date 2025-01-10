import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column '>
    <h1>Login Page</h1>
    <form action="">
      <div>
      <label htmlFor="email">Email</label>
      <input type="email" placeholder='Enter Email'/>
      </div>
      
      <div>
      <label htmlFor="password">Password</label>
      <input type="password" placeholder='Enter Email'/>
      </div>

      <button className='btn btn-success'>Log in</button>

    </form>
    <Link to="/signup" className='text-decoration-none'>Signup Now</Link>
    </div>
    
  )
}

export default Login