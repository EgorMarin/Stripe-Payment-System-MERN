import React, { useState } from 'react'
import axios from 'axios'

export const AuthPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [register, setRegister] = useState('')

  const loginHandler = async(e) => {
    e.preventDefault()
    const rresponse = await axios.post('http://localhost:5000/auth/login', {email, password})
    setEmail('')
    setPassword('')
  }

  const registerHandler = async(e) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:5000/auth/register', {email, password})
    setEmail('')
    setPassword('')
    setRegister(response.data.message.toString())
  }

  return (
    <div className="row">
      <div className="cols s6 offset-s3">
        {
          register 
            ? <div className="card horizontal">
                <div className="card-stacked">
                  <div className="card-content">
                    <p>{register}</p> 
                  </div>
                </div>
              </div>
            : null
        }
        
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Авторизация продавца</span>
            <div>
                <div className="input-field">
                  <input 
                    id="email" 
                    type="text"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                  <input 
                    id="password" 
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <label htmlFor="password">Password</label>
                </div>
            </div>
          </div>
          <div className="card-action">
            <button 
              className="btn yellow darken-4" 
              style={{marginRight: 10}}
              onClick={loginHandler}
            >Войти</button>
            <button 
              className="btn grey lighten-1 black-text"
              onClick={registerHandler}
            >Регистрация</button>
          </div>
        </div>
      </div>
    </div>
  )
}