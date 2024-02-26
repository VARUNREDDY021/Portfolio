import React,{useState,useContext} from 'react';

import { UserContext } from '../Context/UserContext';
import './Navbar.css'
import { Link } from 'react-router-dom';
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
                    CHANGE THEME
                    </button>
            </div>
            <div className='nav-right'>
                <div className="nav-links">
                    
                     <p>HOME</p>
                     <p>PROJECTS</p>
                     <p>SKILLS</p>

                </div>
                <div className="nav-button">
                    <button>CONTACT</button>
                </div>
      
            </div>
                
       
        </div>
    )
}
export default Navbar;