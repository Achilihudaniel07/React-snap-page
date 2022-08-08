import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="Navb">
      <div class="left"> 
        <h1>Snap</h1>
      </div>
        
      <div class="main">
          <ul>
            <li type="select">Features <select></select></li>
            <li>Company <select></select></li>
            <li>Careers</li>
            <li>About</li>
          </ul>  
      </div>
    </div>
  )
}

export default Navbar


