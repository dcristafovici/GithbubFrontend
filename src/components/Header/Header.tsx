import React from 'react'
import { Link } from 'react-router-dom'
import './Header.sass'

const Header:React.FC = () => {
  return(
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <Link to="/" className="header-logo">
            <img src="images/header/logo.svg" alt=""/>
            <span>Github Issue Tracker</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header