import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from '@/assets/styles/Main.module.scss'

const Main = () => {
  const [values, setValues] = useState<Record<'username' | 'room', string>>({ username: '', room: '' })

  const handleStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value, name } } = e
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const isValid = Object.values(values).some(value => !value)
    if (!isValid) e.preventDefault()
  }

  return (
    <div className={ styles.container }>
      <h1>Login</h1>
      <form>
        <div>
          <input
            autoComplete="off"
            name="username"
            placeholder="Enter your username"
            required 
            type="text"
            value={ values.username }
            onChange={ handleStateChange } />
        </div>
        <div>
          <input
            autoComplete="off"
            name="room"
            placeholder="Room number"
            required
            type="text"
            value={ values.room } 
            onChange={ handleStateChange } />
        </div>
        <Link to={ `/chat?name=${values.username}&room=${values.room}` }>
          <button type="submit" onClick={ handleSignIn }>
            Sign in
          </button>
        </Link>
      </form>
      <div className="sdf" typeof="sdfse">sdfsfs
      </div>
      <div />
    </div>
  )
}

export default Main