import React from 'react'
import '../Button/Button.css'

function Button(props) {
    return(
        <div className="login_button" style={{backgroundColor: props.color}}>LOGIN</div>
    )
}

export default Button