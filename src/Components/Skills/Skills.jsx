import React from 'react';
import './Skills.css';
import Card from '../Card/Card';
import resume from '../../img/Resume.pdf'

const Skills=()=>{
    return(
        <div>
<div className='skills-main'>
            <div className="skills-left">
                <span className='skills-span1'>MY</span>
                <span  className='skills-span2'>SKILLS</span>
                
                <span  className='skills-span3'>view my cv by downloading here</span>
             <button>  <a href={resume} download className='s-btn'>Download CV</a></button> 
            </div>
            <div className="skills-right"></div>
            
             <Card 
               heading={'Skills'}
               
              skill1={'CORE JAVA'}
              skill2={'JAVASCRIPT'}
              skill3={'REACT'}
              skill4={'HTML'}
              skill5={'CSS'}/>

        </div>
        </div>
    )
}
export default Skills;