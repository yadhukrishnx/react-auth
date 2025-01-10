import {Link} from 'react-router-dom'

function Login() {
  return (
    <>
    <h1>This is Login</h1>
    <Link to="/signup" className='text-decoration-none'>Signup Now</Link>
    </>
    
  )
}

export default Login