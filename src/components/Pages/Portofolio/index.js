import React, {useState} from "react";
import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from '../../AnimatedLetters'
import portofolioData from "../../../Data/portofolio.json"
import { useEffect } from "react";
const Portofolio= () =>{

    const [letterClass,setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(()=>{
            setLetterClass('text-animate-hover');
        },3000);
        return () => {
            clearTimeout(timer);
        }
    });

    const renderPortofolio = (portofolio) =>{
        return (
            <div className= "images-container">
                {
                    portofolio.map((port,idx)=>{
                      return(
                       <div className =" image-box "  key={idx}>
                        <img
                        src={port.cover} 
                        className='portofolio-image'
                        alt={port.description}/>
                        <div className="content">
                            <p className="title">{port.title}</p>
                            <h4 className="description">{port.description}</h4>
                            <button className="btn" onClick={() => window.open(port.url)} > View </button>
                            </div>
                        </div>
                      )
                    })
                }
            </div>
        )
    }

    return (
    <>
    <div className= "container portofolio-page">
        <h1 className="page-title">
            <AnimatedLetters
            letterClass={letterClass}
         strArray={"Tasks Projects".split("")}
         idx={15} />
            </h1>
            <div>{renderPortofolio(portofolioData.portofolio)}</div>
    </div>

  <Loader type="pacman"/>
  </>
    )
        ;
}

export default Portofolio;