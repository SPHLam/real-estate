import "./navbar.scss"
import {useState} from 'react'

function Navbar() {
  const [hamburgerButton, setHamburgerButton] = useState(false);

  function setOpen() {
    setHamburgerButton(!hamburgerButton)
  }

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="./logo.png" alt="" />
          <span>RealEstate</span>
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="right">
        <a href="">Sign In</a>
        <a href="" className="register">Sign Up</a>
        <div className="menuIcon" onClick={setOpen}>
          <img src="/menu.png" alt="" />
        </div>
        <div className={hamburgerButton ? "menu active" : "menu"}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="">Sign In</a>
          <a href="">Sign Up</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;