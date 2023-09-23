import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [pending, setPending] = useState(null)
  const { dispatch } = useAuthContext()
	const backendURL = process.env.REACT_APP_BACKEND;

  const login = async (email, password) => {
    setPending(true)
    setError(null)
    const response = await fetch(`${backendURL}/user/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()
    if (!response.ok) {
      setPending(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setPending(false)
    }
  }

  return { login, pending, error }
}
