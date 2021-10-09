import React from 'react';
import './Body.css';

function Body(props){
    return(
        <div className="Body">
        <p>{props.texto1}</p>
        <p>{props.texto2}</p>
        <p>{props.texto3}</p>
        <p>{props.texto4}</p>
        <p>{props.texto5}</p>
        <p>{props.texto6}</p>
        <p>{props.texto7}</p>
        <p>{props.texto8}</p>
            
        <p>
        <button type="button" class="btn-primary btn-lg">Clic</button>
        </p>

        </div>
    )
}


export default Body;