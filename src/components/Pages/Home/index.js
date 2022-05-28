import Logo from '../../../assets/images/Logo.png'
import './index.scss'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import {useState, useEffect} from 'react'
import AnimatedLetters from '../../AnimatedLetters'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray=['l','e','x','a','n','d','r','u',',']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    ' ',
    'w',
    'a',
    'n',
    'n',
    'a',
    'b',
    'e',
    '.'
  ]
  useEffect(()=>
  { setTimeout(()=>
      {
          return setLetterClass('text-animate-hover')
      }, 3000)
  },[])

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
        
         <img className="img" src={Logo}
         alt="developer"/>
         
           <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
         
       </h1>
       <h2>Front End Novice developer, Fullstack Developer in self-making</h2>
       <Link to="/contact" className='flat-button'>Contact Me</Link>
       </div>
     </div>
     <Loader type="pacman"/>
    </>
  )
}

export default Home