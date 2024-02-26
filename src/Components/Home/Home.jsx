import React from 'react';
import './Home.css'
import insta from '../../img/instagram.png';
import linkedin from '../../img/linkedin.png';
import github from '../../img/github.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';


const Home=()=>{
    return(
        <div className='home-main'>
            <div className="home-left">
                <div className="home-name">
                  <span className='home-1stspan'>Hi! I AM</span>
                  <span className='home-2ndspan'>VARUN REDDY</span>
                  <span className='home-3rdspan'>Frontend Developer</span>
                </div>
                <button className='home-btn '>Hire me!</button>
                <div className="home-icons">
                    <a href='https://www.instagram.com/invites/contact/?i=wl6nfa5tki5o&utm_content=o0s605j'>
                    <img src={insta}/>
                    </a>

                  <a href=''>
                     <img src={github}/>
                  </a> 

                    <a>
                    <img src={linkedin}/>
                    </a>


                </div>
            </div>
            <div className="home-right">
               <img src={Vector1} className='h-right-img1'/>
               <img src={Vector2} className='h-right-img2'/>
               <img src='' className='h-right-img3'/>

            </div>
      
        </div>
    )
}
export default Home;