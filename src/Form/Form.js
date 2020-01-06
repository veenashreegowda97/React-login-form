import React,{Component} from 'react'
import '../Form/Form.css'
import Button from '../Button/Button'
import Input from '../Input/Input'
import 'font-awesome/css/font-awesome.min.css';

class Form extends Component{
    state={
        name:'',
        password:''
    }
    onChange=(e)=>{
        this.setState({
            name:e.target.value,
            password:e.target.value  
        })
    }
    onChangepassword=(e)=>{
        this.setState({
            password:e.target.value   
        })
    }
    render(){
        return(
            <div className="main-wrapper">
                <header className="header-wrapper">
                </header>
                <div className="form-wrapper">
                    <div className="user_login"><b>User Login</b></div>
                        <Input placeholder="Username" name={this.state.name} onChange={this.onChange} fontawesome="fa fa-user"/>
                        <Input placeholder="Password" name={this.state.password} onChange={this.onChangepassword} fontawesome="fa fa-lock"/>        
                        <Button color={this.state.password}/>
                    </div>
                    <div className="forgot-wrapper">
                        <div className="forgot-text">
                            Forgot Username Password?
                        </div>
                    </div>
                    <div className="create-acc-wrapper">
                        <div className="create-text">
                            Create Your  Account ->
                        </div>
                    </div>
            </div>
        )
    }  
}

export default Form