import React from 'react';
import './Table.css';

function table(props) {
    let tableData = props.data;
    const listItems = tableData.map((number) =>
    <tr key={number.rollno}>
        <td>{number.name}</td>
        <td>{number.rollno}</td>
        <td>{number.branch}</td>
        <td>{number.section}</td>
        <td>{number.year}</td>
    </tr> 
    );

    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Roll</th>
                    <th>Branch</th>
                    <th>Section</th>
                    <th>Year</th>
                </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </table>
        </div>  
    )
}
export default table;