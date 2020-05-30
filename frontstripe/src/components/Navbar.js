import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
        <span className="brand-logo">Store</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/">Сделать заказ</NavLink></li>
          <li><NavLink to="/create">Создать товар</NavLink></li>
          <li><NavLink to='/auth'>Войти в систему</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}