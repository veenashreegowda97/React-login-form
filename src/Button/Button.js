import React from 'react'
import '../Button/Button.css'

function Button(props) {
    return(
        <div class="login_button" style={{backgroundColor: props.color}}>LOGIN</div>
    )
}

export default Button