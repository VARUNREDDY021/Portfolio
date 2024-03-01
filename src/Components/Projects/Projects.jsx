import React from 'react';
import './Projects.css';

import Bubble from '../../img/Bubble.png.png';
import shopee from '../../img/Shopee.png.png';
import netflix from '../../img/Netflix.png.png';
import number from '../../img/Number.png.png';
import temp from '../../img/Temperature.png.png';

const Projects=()=>{
    return(
        <div className='projects'>
            <div className="projects-left">
              <span className='project-1stspan'>Recent Projects</span>
              <span className='project-2ndspan'>Portfolio</span>
            </div>
            <div className="projects-right">
                
                    <div className='Project-eachimg'>
                       <a href='https://main--lambent-valkyrie-c16033.netlify.app/'>

                        <img src={temp}  style={{height:'200px'}}/>
                        <p>TEMPERATURE CONVERTOR</p>
                       </a>
                    </div>
                    

                    <div className='Project-eachimg'>
                        <a href='https://varunreddy021.netlify.app/'>
                        <img src={Bubble}   style={{height:'200px'}}/>
                        <p>BUBBLE GAME</p>
                        </a>
                    </div>
                        
                    

                         <div className='Project-eachimg'>
                            <a href='https://main--endearing-bunny-9f9cb9.netlify.app/'>

                        <img src={number}  style={{height:'200px'}}/>
                        <p>NUMBER GAME</p>
                            </a>
                         </div>
                

                         <div className='Project-eachimg'>

                            <a href='https://main--joyful-dango-36e376.netlify.app/'>
                        <img src={netflix}  style={{height:'200px'}}/>
                        <p>NETFLIX LANDINGPAGE</p>
                            </a>
                         </div>
                    

                          <div className='Project-eachimg'>
                            <a href='https://varunreddy021.github.io/e-commerce-website/'>

                        <img src={shopee}  style={{height:'200px'}}/>
                        <p>SHOPPING APP</p>
                            </a>
                          </div>
                

            </div>
            <hr className='Project-botttom-line'/>
        </div>
    )
}
export default Projects;
