import React from 'react';
import './Home.css'
import insta from '../../img/instagram.png';
import linkedin from '../../img/linkedin.png';
import github from '../../img/github.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import {Link } from 'react-scroll';
import varun from '../../img/varun2.png'
import vector3 from '../../img/Vector3.png'


const Home=()=>{
    return(
        <div className='home-main'>
            <div className="home-left">
                <div className="home-name">
                  <span className='home-1stspan'>Hi, I am</span>
                  <span className='home-2ndspan'>Varun Reddy</span>
                  <span className='home-3rdspan'>Developer</span>
                </div>
                <Link to='contact-form' smooth={true} duration={600}>
                <button className='home-btn '>Hire me!</button>
                </Link>
                <div className="home-icons">
                    <a href='https://www.instagram.com/invites/contact/?i=wl6nfa5tki5o&utm_content=o0s605j'>
                    <img src={insta}/>
                    </a>

                  <a href='https://github.com/VARUNREDDY021'>
                     <img src={github}/>
                  </a> 

                    <a href='https://www.linkedin.com/in/varun-reddy-vankeshwaram-385621237'>
                    <img src={linkedin}/>
                    </a>


                </div>
            </div>
            <div className="home-right">
               <img src={vector3} className='h-right-img1'/>
               
            </div>
      
        </div>
    )
}
export default Home;