import React,{Component} from 'react';
import CreateForm from '../CreateForm/CreateForm';
import Table from '../Table/Table';
import './StudentData.css';
import * as utils from '../utils/utils';
 

class StudentData extends Component {
    state={
        studentInfo:utils.studentData
    }
   
    getData=(postedData)=>{
        let studentval=[...this.state.studentInfo]
        studentval.push(postedData)
        this.setState({
            studentInfo : studentval
        })
    }
    render(){
        return(
            <div className="Create-main">
                <div className="create-body">
                    <CreateForm passData={this.getData}></CreateForm>
                    <div className="table-wrapper">
                        <Table data={this.state.studentInfo}></Table>
                    </div>
                </div>
            </div>
        )
    }
}
export default StudentData;