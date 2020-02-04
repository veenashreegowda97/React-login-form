import React from 'react';
import './Dropdown.css';

function DropDown(props){

    return(
        <div className="input-alignment-wrappers">
        <select className="select-wrapper" value={props.value} onChange={props.onChange}>
            { props.arrData.map((element)=>
                <option key={element.val}>{element.name}</option>
            )}
        </select>
    </div>
    )
    
}

export default DropDown;