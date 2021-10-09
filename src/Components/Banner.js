import React from 'react';
import './Banner.css';

function Banner(props){
    return(
        <div className="Banner">
         <p>{props.texto}</p>
         <p>{props.texto9}</p>   
        </div>
    )
}

export default Banner;