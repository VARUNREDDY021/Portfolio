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

                        <img src={temp}  style={{height:'200px'}}/>
                        <p>TEMPERATURE CONVERTOR</p>
                    </div>
                    
                    <div className='Project-eachimg'>
                        <img src={Bubble}   style={{height:'200px'}}/>
                        <p>BUBBLE GAME</p>
                    </div>
                        
                    

                         <div className='Project-eachimg'>
                        <img src={number}  style={{height:'200px'}}/>
                        <p>NUMBER GAME</p>
                         </div>
                

                         <div className='Project-eachimg'>
                        <img src={netflix}  style={{height:'200px'}}/>
                        <p>NETFLIX LANDINGPAGE</p>
                         </div>
                    

                          <div className='Project-eachimg'>
                        <img src={shopee}  style={{height:'200px'}}/>
                        <p>SHOPPING APP</p>
                          </div>
                

            </div>
            <hr className='Project-botttom-line'/>
        </div>
    )
}
export default Projects;
