import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [pending, setPending] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = async (username,email, password,number) => {
    setPending(true)
    setError(null)

    const response = await fetch('/user/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username,email, password,number })
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

  return { signup, pending, error }
}
