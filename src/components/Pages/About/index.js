import './index.scss'
import Typical from 'react-typical'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{
    faNodeJs,
    faCss3,
    faHtml5,
    faReact
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import {useState, useEffect} from 'react'
import AnimatedLetters from '../../AnimatedLetters'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(()=>
    { setTimeout(()=>
        {
            return setLetterClass('text-animate-hover')
        }, 3000)
    },[])

  return (
    <>
     <div className="container about-page">
     <div className="text-zone">
       <h1><AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
       </h1>
       <p>I'm a very ambitious front-end developer looking to start my career.</p>
            <p>I'm always in a search to improve myself, naturally curious with a perfectionist mentality.</p>
            <p>For short, I have a calm mindset and I'm always treating my projects with seriosity.</p>
            <p>I know to use {' '}
                <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                    'Html', 3500,
                    'Css', 3500,
                    'JavaScript',3500,
                    'React',3500,
                    'NodeJS', 3500
                ]}/>
                {' '} with a number of attached libraries and technologies.
            </p>
       </div>
    <div className='stage-cube-cont'>
        <div className='cubespinner'>
            <div className='face1'>
                <FontAwesomeIcon icon={faNodeJs} color="#DD0031"/>
            </div>
            <div className='face2'>
                <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
            </div>
            <div className='face3'>
                <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
            </div>
            <div className='face6'>
                <FontAwesomeIcon icon={faReact} color="#EC4D28"/>
            </div>
        </div>

    </div>
     </div>
     <Loader type="pacman"/>
    </>
  )
}

export default About