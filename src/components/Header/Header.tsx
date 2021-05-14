import React from 'react'
import './Header.sass'

const Header:React.FC = () => {
  return(
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <a href='#' className="header-logo">
              <img src="images/header/logo.svg" alt=""/>
              <span>Github Issue Tracker</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header