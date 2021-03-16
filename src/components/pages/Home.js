import React, { useState, useEffect, lazy, Suspense, useContext } from 'react'
import { Link } from 'react-router-dom'
import VisibilitySensor from '../layout/utils/VisibilitySensor'
import Navbar from '../layout/Navbar'
import Copyright from '../layout/Copyright'
import Footer from '../layout/Footer'
import Cursor from '../layout/utils/Cursor'
import { CursorContext } from '../../context/CursorContext'
import inertiaVert from '../../assets/images/projects/inertia-vert-sm.webp'
import toursVert from '../../assets/images/projects/toursVert.webp'
import glitchLog from '../../assets/images/projects/glitchLog.webp'
import arrowSvg from '../../assets/icons/arrow-down-right.svg'

const ProjectCards = lazy(() => import('../layout/ProjectCards'))

const Home = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const { setHoveredState } = useContext(CursorContext)

  useEffect(() => {
    const parallax = e => {
      const displays = document.querySelectorAll('.display')
      const displayStyle = {
        x: (e.clientX * 20) / 1000,
        y: (e.clientY * 20) / 1000,
      }
      setPos(displayStyle)
      displays.forEach(display => {
        if (window.scrollY < 1000) {
          display.style.transform = `translate(${pos.x}px, ${pos.y}px)`
        }
      })
    }

    document.addEventListener('mousemove', parallax)
    return () => document.removeEventListener('mousemove', parallax)
  }, [pos.x, pos.y])

  return (
    <div>
      <header>
        <Navbar
          titleDisabled='KYLE LYNCH'
          title2='PROFILE'
          linkName='/profile'
          noDisplay='no-display'
        />
      </header>
      <main>
        <section className='home-section-1'>
          <div className='projects-title'>
            Selected
            <br />
            <p>Work</p>
          </div>

          <div className='display img-dis-1'>
            <img
              src={inertiaVert}
              alt='inertia-display'
              width='260px'
              height='340px'
            />
          </div>
          <div className='display img-dis-2'>
            <img
              src={glitchLog}
              alt='glitchLog-display'
              width='160px'
              height='240px'
            />
          </div>
          <div className='display img-dis-3'>
            <img
              src={toursVert}
              alt='tours-display'
              width='220px'
              height='300px'
            />
          </div>

          <VisibilitySensor offset={{ bottom: 100, top: -400 }}>
            {({ isVisible }) => (
              <div className={`scroll-div ${isVisible && 'hidden'}`}>
                <p>SCROLL</p>
                <p className='scroll-vert'></p>
              </div>
            )}
          </VisibilitySensor>
        </section>
        <section className='home-section-2'>
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectCards />
          </Suspense>
        </section>
        <article className='profile-link-bottom'>
          <span>
            Visit <img src={arrowSvg} alt='down right svg' />
          </span>
          <br />
          <Link
            to='/profile'
            onMouseEnter={() => setHoveredState(true)}
            onMouseLeave={() => setHoveredState(false)}
          >
            Profile
          </Link>
        </article>
        <Copyright />
      </main>
      <Footer />
      <Cursor />
    </div>
  )
}

export default Home
