import './index.scss';
import Loader from 'react-loaders';
import Logo from './Logo'
import LogoTitle from '../../assets/images/logo-a.png';
import AnimatedLetters from '../AnimatedLetters';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['n', 'u', 'n', 't','i', 'w', 'a', 't']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
      <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
          <br />
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m</span>
        <img src={LogoTitle} alt="developer" />
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        idx={15} />
        <br />
        <AnimatedLetters letterClass={letterClass}
        strArray={jobArray}
        idx={22} />
      </h1>
        <h2>Fullstack Developer</h2>
        <a href="https://www.freepik.com/free-vector/coloured-alphabet-design_1042664.htm#query=Vilmosvarga&position=4&from_view=search">Logo Designed by Vilmosvarga / Freepik</a>
        <br />
        <Link to ="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />
    </div>
    <Loader type="pacman"/>
    </>
  )

}

export default Home