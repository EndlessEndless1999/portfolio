import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faNodeJs, faPython, faReact, faRust, faSass } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const [letterClass, setLetterClass ] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                    idx={15}
                    />
                </h1>
                <p>I am a web developer based in Brighton</p>
                <p>I am very confident</p>
                <p>I hope to work in a cool company</p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color='white'/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faPython} color='red'/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faRust} color='yellow'/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faGitAlt} color='cadetblue'/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faNodeJs} color='green'/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faSass} color='pink'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='transition'/>
        </>

    )
}

export default About