import { useState} from "react"
import { Link } from 'react-router-dom';
import { useLogin } from "../../hooks/useLogin"
import css from '../css/auth.module.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, pending} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
  }

  return (
    <form className={css.signup} onSubmit={handleSubmit}>
		<h2>Log In</h2>
		<label>Email address:</label>
		<input 
		type="email" 
		onChange={(e) => setEmail(e.target.value)} 
		value={email} 
		/>
		<label>Password:</label>
		<input 
		type="password" 
		onChange={(e) => setPassword(e.target.value)} 
		value={password} 
		/>
		{error && <div className={css.error}>{error}</div>}
		<p>Don't have an account?  <Link to='/signup'>signup</Link></p>
		<button disabled={pending}>Log in</button>
    </form>
  )
}

export default Login;
