import React,{Component} from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './CreateForm.css';
import DropDown from '../Dropdown/Dropdown';
import * as utils from '../utils/utils';

class  CreateForm extends Component {
    state={
        name:'',
        rollno:'',
        year:'',
        branch:'',
        section:''
    }
    handleChange=(e)=> {
        this.setState({[e.target.name]:e.target.value});
    }

    handleChangeBranch=(e)=>{
        this.setState({branch:e.target.value});
    }
    handleChangeSection=(e)=>{
        this.setState({section:e.target.value});
    }
    handleSubmit=(e)=>{
        console.log(this.state);
        if(!this.state.name || !this.state.rollno || !this.state.year || !this.state.branch || !this.state.section){
            alert('Required data missing')
            if(this.state.name){
                if(!this.state.name.match(/^[a-zA-Z]+$/)){
                    alert('name required letters');
                }        
            }
            if(this.state.rollno || this.state.year) {
                if(!this.state.rollno.match(/^[0-9]+$/)) {
                    alert('rollno requires number')
                }
            }
            if(this.state.year) {
                if(!this.state.year.match(/^[0-9]+$/)) {
                    alert('year requires number')
                }
            }
        }else{
            let objData={
                name : this.state.name,
                rollno : this.state.rollno,
                branch : this.state.branch,
                section : this.state.section,
                year : this.state.year
            };
            if(objData) {
                this.props.passData(objData);
            }
            
            this.setState({
                name:'',
                rollno:'',
                year:'',
                branch:'',
                section:''
            },()=>{

            })
        }
    }
    componentDidMount(){
        console.log('mount');
    }
    
    render(){
        let sectionResult = utils.sectionData.filter(item => item.name.indexOf(`${this.state.branch}`) !== -1);
        let sectionsVal = sectionResult[0].section
        return(
            <div className="main-create-wrapper">
                <div className="Create-wrapper">
                    <div className="h2Wrapper">
                        <h2>Student Form</h2>
                    </div>
                    <div className="first">
                        <div className="input-alignment-wrapper">
                            <Input placeholder="Studentname" name='name' value={this.state.name} onChange={this.handleChange}></Input>
                        </div>
                        <div className="input-alignment-wrapper">
                            <Input placeholder="Roll number" name='rollno' value={this.state.rollno} onChange={this.handleChange}></Input>
                        </div>
                        <div className="input-alignment-wrapper">
                            <Input placeholder="year" name='year' value={this.state.year} onChange={this.handleChange}></Input>
                        </div>
                    </div>
                    <div className="second">
                        <DropDown value={this.state.branch} onChange={this.handleChangeBranch} arrData={utils.branchData}></DropDown>
                        <DropDown value={this.state.section} arrData={sectionsVal} onChange={this.handleChangeSection}></DropDown>
                    </div>
                    <div className="button-wrapper">
                        <Button color='green' onClick={this.handleSubmit}>SUBMIT
                        </Button>
                    </div>
                </div>
            </div>
        )
    } 
}
export default CreateForm;