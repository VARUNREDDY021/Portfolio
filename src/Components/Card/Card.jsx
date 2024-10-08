import React from 'react';
import'./Card.css';

const Card=(props)=>{
    return(
    <div className='card'>
        <span className='card-heading'>{props.heading}</span>
        <hr className='card-hr'/>
   <span className='ck card-skill1'>{props.skill1}</span>
   <span className='ck card-skill2'>{props.skill3}</span>
   <span className='ck card-skill3'>{props.skill2}</span>
   <span className='ck card-skill4'>{props.skill4}</span>
   <span className='ck card-skill5'>{props.skill5}</span>
    </div>
    )
}


export default Card;