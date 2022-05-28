import './index.scss'
import {useState,useRef, useEffect} from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form= useRef()
    useEffect(()=>
    { setTimeout(()=>
        {
            return setLetterClass('text-animate-hover')
        }, 3000)
    },[])


    const sendEmail=(e)=>{
        e.preventDefault()
        
    emailjs.sendForm(
            'service_utlc7my',
            'template_ia6fev8',
            form.current,
            'Pi1hwsrlWlmGlo0p0'
        )
        .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
    }
    return(
        <>
        <div className='container contact-page'>
           <div className='text-zone'>
               <h1>
                   <AnimatedLetters letterClass={letterClass}
                   strArray={['C',"o",'n','t','a','c','t',' ','M','e']}
                   idx={15}
                   />
               </h1>
               <p>
                 As I am only at the beggining of the journey, I'm interested in a place in a company or small projects as a freelance opportunity.
               </p>
               <div className='contact-form'>
                   <form ref={form} onSubmit={sendEmail}>
                       <ul>
                           <li className='half' >
                               <input type="text" name='name' placeholder='Name' required/>
                           </li>
                           <li className='half'>
                               <input type="email" name='email' placeholder='Email' required/>
                           </li>
                           <li >
                               <input placeholder="Subject" type="text" name='subject'  required/>
                           </li>
                           <li >
                               <textarea placeholder='Message' name='message' required></textarea>
                           </li>
                           <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>

                       </ul>
                   </form>
               </div>



           </div>
           <div className='info-map'>
           Artem Alexandru,
           <br/>
           Romania,
           <br/>
           Bucharest
           </div>
           <div className='map-wrap'>
               <MapContainer center={[44.42803432703735, 26.10250345176075]} zoom={13}>
                   <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                   <Marker position={[44.42803432703735, 26.10250345176075]}>
                       <Popup>Nice City</Popup>
                   </Marker>
               </MapContainer>
           </div>




        </div>
        <Loader type="pacman"/>
        
        </>
    )
}
export default Contact