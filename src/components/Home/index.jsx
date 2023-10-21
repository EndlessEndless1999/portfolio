import React from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  return (
    <div className='container home-page'>
        <div className="text-zone">
            <h1>Hi, <br /> Im
            <img src={LogoTitle} alt='developer' />
            Charlie 
            <br />
            Web Developer
            </h1>
            <h2>FullStack Developer: Ruby on Rails Expert</h2>
            <Link to='/contact' className='flat-button' >Contact Me</Link>
        </div>
    </div>
  )
}

export default Home