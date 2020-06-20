import React from 'react';
import "./input.css"

function input({handleName,handleEmail,handlePhone}) {
 
   
   
    return (
        <div className="container-input">
        <label>
        Name:
        <input onChange={handleName} 
        className="input" type="text" ></input>
        </label>
        <br/>
        <label>
        Email:
        <input onChange={handleEmail} 
        className="input" type="text" ></input>
        </label>
        <br/>
        <label>
        Phone:
        <input onChange={handlePhone}
        className="input3" type="text" ></input>
        </label>
           
        </div>
    );
}

export default input;