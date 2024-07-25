import React from 'react'
import images from '../images'
import "./NavBar.css"

function NavBar() {

  return (
    <div className='navbar'>
        
      <img className="logo" src={images.logo} alt="Logo" />
      <img className="avatar" src={images.avatar} alt="avatar" />

    </div>
  )
}

export default NavBar
