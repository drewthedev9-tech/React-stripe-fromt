import React from 'react';
import "./input.css"

function input(props) {
    return (
        <div className="container-input">
        <label>
        Name:
        <input className="input" type="text" ></input>
        </label>
        <br/>
        <label>
        Email:
        <input className="input" type="text" ></input>
        </label>
        <br/>
        <label>
        Phone:
        <input className="input3" type="text" ></input>
        </label>
           
        </div>
    );
}

export default input;