import React from 'react'
import '../input/input.css'

function input() {
    return (
        <div classNameName="input-wrapper">
            <input type="text" className="inputs" placeholder="Username"/>
            <input type="text" className="inputs" placeholder="Password"/>
        </div> 
    )
}

export default input