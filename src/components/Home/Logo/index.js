import { useEffect, useRef } from 'react';
import './index.scss'
import LogoA from '../../../assets/images/logo-a.png'
import gsap from 'gsap-trial'

const Logo = () => {
  const bgRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {

    gsap
    .timeline()
    .to(bgRef.current, {
      duration: 1,
      opacity: 1,
    })
    
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 3,
        duration: 3,
      }
    )
   
  }, [])

  return (
  <div className="logo-container" ref={bgRef}>
        <img ref={solidLogoRef} className="solid-logo" src={LogoA} alt="A"/>
  </div>
  )
}

export default Logo