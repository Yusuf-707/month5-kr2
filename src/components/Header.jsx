import React from 'react'
import { Link } from 'react-router-dom'
import HomePage from '../pages/HomePage'

export default function Header() {
  return (
    <div>
        <Link to="/">Task Manager</Link>
        <Link to="/about">О приложении</Link>
    </div>
  )
}
