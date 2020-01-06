import React from 'react'
import './Input.css'

function input(props) {
    return (
        <div className="main-input-class">
            <div className={`input-wrapper ${props.fontawesome}`}>
                <input type="text" className="inputs"  placeholder={props.placeholder} value={props.name} onChange={props.onChange}/>
            </div> 
        </div>
        
    )
}

export default input