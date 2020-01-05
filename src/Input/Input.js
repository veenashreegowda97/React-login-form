import React from 'react'
import './Input.css'

function input(props) {
    return (
        <div className="input-wrapper">
            <input type="text" className="inputs" placeholder={props.placeholder} value={props.name} onChange={props.onChange}/>
        </div> 
    )
}

export default input