import React from 'react'
import './Input.css'

function input() {
    return (
        <div className="input-wrapper">
            <input type="text" className="inputs" placeholder="Username"/>
            <input type="text" className="inputs" placeholder="Password"/>
        </div> 
    )
}

export default input