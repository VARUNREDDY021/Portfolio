import React from 'react';

const ProjectCard=(props)=>{
    return(
<div>
   <img src={props.img}/>
   <p>{title}</p>
   <p>{lang}</p>
</div>

    )
}
export default ProjectCard;