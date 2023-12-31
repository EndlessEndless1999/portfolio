import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import './index.scss'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {
  return (
    <div className="navbar">
      <Link className='logo' to='/'>
        <img src={LogoS} alt="logo"/>
        <img className="sub-logo" src={LogoSubtitle} alt="logo"/>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color='#4d4d4e'></FontAwesomeIcon>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color='#4d4d4e'></FontAwesomeIcon>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'></FontAwesomeIcon>
        </NavLink>
       

      </nav>

      <ul>
          <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/charlie-mitchell-aa294b271/'>
              <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/EndlessEndless1999'>
              <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
            </a>
          </li>
        </ul>
        
    </div>
  )
}

export default Sidebar