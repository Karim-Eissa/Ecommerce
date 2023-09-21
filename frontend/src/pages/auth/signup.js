import { useState } from "react"
import { Link } from 'react-router-dom';
import css from '../css/auth.module.css'
import { useSignup } from "../../hooks/useSignup"

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [number, setNumber] = useState('')
  const {signup, error, pending} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(username,email, password,number)
  }

  return (
    <form className={css.signup} onSubmit={handleSubmit}>
		<h2>Sign Up</h2>
		<label>Name:</label>
		<input 
		required
		placeholder="ex. John"
		type="text" 
		onChange={(e) => setUsername(e.target.value)} 
		value={username} 
		/>
		<label>Phone Number:</label>
		<input 
		required
		placeholder="Number"
		type="number" 
		onChange={(e) => setNumber(e.target.value)} 
		value={number} 
		/>	
		<label>Email address:</label>
		<input 
		required
		placeholder="example@example.com"
		type="email" 
		onChange={(e) => setEmail(e.target.value)} 
		value={email} 
		/>
		<label>Password:</label>
		<input 
		required
		placeholder="New Password"
		type="password" 
		onChange={(e) => setPassword(e.target.value)} 
		value={password} 
		/>	
		{error && <div className={css.error}>{error}</div>}
		<p>Already have an account?  <Link to='/login'>login</Link></p>
		<button disabled={pending}>Sign up</button>
    </form>
  )
}

export default Signup;
