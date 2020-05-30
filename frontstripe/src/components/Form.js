import React, { useState } from "react"
import CardSection from "./CardSection"

function FormInput({sendFile}) {

  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    //этой функцией отправляем данные из компонента
    sendFile(name, email, number, city)

    setNumber('')
    setName('')
    setEmail('')
    setCity('')
  }

  return (
    <form
      style={{display: 'flex', flexDirection: "column", padding: 10, maxWidth: 300, margin: "30px auto", border: '1px solid #212121', boxShadow: '3px 3px 0 0 #212121'}}
    >
        <input 
          placeholder="Введите ваше имя"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{marginBottom: '1rem'}}
        />
        <input 
          placeholder="Введите ваш email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{marginBottom: '1rem'}}
        />
        <input 
          placeholder="Введите ваш моб"
          value={number}
          onChange={e => setNumber(e.target.value)}
          style={{marginBottom: '1rem'}}
        />
        <input 
          placeholder="Город"
          value={city}
          onChange={e => setCity(e.target.value)}
          style={{marginBottom: '1rem'}}
        />

        <CardSection/>

        <button onClick={handleSubmit} style={{marginTop: '1rem'}}>Confirm order</button>
      </form>
  )
}

export default FormInput