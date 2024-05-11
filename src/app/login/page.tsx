'use client'

import { login, signInWithGoogle, signup } from './actions'

const LoginPage = () => {
  const handleLogin = () => {
    signInWithGoogle()
  }

  return (
    <>
      <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default LoginPage
