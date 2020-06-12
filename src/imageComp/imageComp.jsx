import React from 'react';
import pomeloImage from "../img/pomelo-img.png"
import "./imageComp.css"


const Image = () => {
    return ( 
        <div className="image-flex">
        <img className="pomelo-img"
        alt ="pic"
        src ={pomeloImage}
        />
        </div>
     );
}
 
export default Image;