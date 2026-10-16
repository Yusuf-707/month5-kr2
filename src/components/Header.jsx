import React from 'react'
import { NavLink } from 'react-router-dom'
import HomePage from '../pages/HomePage'

export default function Header() {
  return (
    <header>
        <NavLink className='NavLink' to="/">Task Manager</NavLink>
        <NavLink className='NavLink' to="/about">О приложении</NavLink>
    </header>
  )
}
