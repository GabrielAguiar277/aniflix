import React from 'react';
import "./style.css"

function Card({img_url}){
    return(
        <div className="card">
            <img src={img_url} alt=""/>
        </div>
    )
}

export default Card;