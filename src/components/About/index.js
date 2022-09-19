import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  
  
  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters 
          letterClass={letterClass}
          strArray={['A','b','o','u','t',' ','m','e']}
          idx={15}
          />
        </h1>
        {/* Wirte about yourself */}
        <p>Hello, My name is Anuntiwat Raungtorwong, nickname's Jr.</p>

        <p>I love coding a program but I didn't graduate in computer science instead I have the courage to work in the software house or tech-company</p>

        <p>Now, I learning React framework for my goal of looking for a job that suits my skill. I still learning but I will get better and better to prove myself that I can do it too.</p>
        
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faPython} color="#306998" />
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman"/>
    </>
  )
}

export default About