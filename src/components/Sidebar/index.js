import React, {useState} from 'react'
import './index.scss'
import LogoS from '../../assets/images/Logo.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} 
from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faBoxArchive, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {

   const[showNav,setShowNav] = useState(false);




  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>

        <NavLink 
        onClick={()=> setShowNav(false)}
        exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink 
        onClick={()=> setShowNav(false)}
        activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink 
        onClick={()=> setShowNav(false)}
        activeclassname="active" className="porto-link" to="/portofolio">
          <FontAwesomeIcon icon={faBoxArchive} color="#4d4d4e" />
        </NavLink>

        <NavLink 
        onClick={()=> setShowNav(false)}
        activeclassname="active" className="contact-link" to="/contact" >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon 
        onClick={()=> setShowNav(false)}
        icon={faClose}
        color='#ffd700'
        size='3x'
        className='close-icon'
        
        
        />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/artem-alexandru-5b5709175/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/alexandruart"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
      onClick={()=> setShowNav(true)}
      icon={faBars}
      color='#ffd700'
      size="3x"
      className='hamburger-icon'
      />
    </div>
  )
}

export default Sidebar