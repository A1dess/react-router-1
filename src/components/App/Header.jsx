import React from 'react'
import hth from './Header.module.css'


const Header = () => {
  return (
    <div>
        <div className={hth.container}>
            <h1>Here is logo</h1>
            <div className={hth.nav}>
            <h2>Home</h2>
            <h2>About us</h2>
            <h2>Contact</h2>
            <h2>News</h2>
            <h2>Services</h2>
            </div>
        </div>
    </div>
  )
}

export default Header