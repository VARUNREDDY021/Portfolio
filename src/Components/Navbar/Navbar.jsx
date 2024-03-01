import React,{useState,useContext} from 'react';
import {Link} from 'react-scroll'
import { UserContext } from '../Context/UserContext';
import './Navbar.css'
import mode from '../../img/brightness-and-contrast.png';




const Navbar=()=>{
    const {setChange,change} = useContext(UserContext);


 const handlebtn=()=>{
    setChange(!change);
 }


    return(
        <div className='nav-main'>
            <div className='nav-left'>
                <h2>PORTFOLIO</h2>
                <button onClick={handlebtn} className='theme-btn'>
                   <img src= {mode} className='mode-img'/>
                    </button>
            </div>
            <div className='nav-right'>
                <div className="nav-links">

                    <Link to='nav-main' smooth={true} duration={500}>
                     <p>HOME</p>
                    </Link>


                    <Link to='projects' smooth={true} duration={500}>
                     <p>PROJECTS</p>
                    </Link>

                        
                    <Link to='skills-main' smooth={true} duration={500}>
                     <p>SKILLS</p>
                    </Link>

                </div>
                <div className="nav-button">
                <Link  to='contact-form' smooth={true}>
                
                    <button>CONTACT</button>
                </Link>
                </div>
      
            </div>
                
       
        </div>
    )
}
export default Navbar;