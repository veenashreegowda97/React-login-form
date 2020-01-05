import React from 'react'
import '../Form/Form.css'
import Button from '../Button/Button'
import Input from '../Input/Input'

function Form() {
    return(
        <div class="form-wrapper">
            <div class="user_login"><b>User Login</b></div>
            <div class="input-boxes">
                <Input/>
                <Input/>           
            </div>
            <div class="button-wrappers">
                <Button/>
            </div>
            <div class="forgot-wrapper">
                <div class="forgot-text">
                    Forgot Username Password?
                </div>
            </div>
            <div class="create-acc-wrapper">
                <div class="create-text">
                    Create Your  Account ->
                </div>
            </div>
        </div>
    )
}

export default Form