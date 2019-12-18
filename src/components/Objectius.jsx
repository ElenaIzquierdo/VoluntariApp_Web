import React from "react";
import {
    Table
} from 'reactstrap';

class Objectius extends React.Component{
    renderGoals(){
        return this.props.objectius.map((objectiu)=>{
            return(
                <tr key={objectiu}>
                    <td>
                        <i className="fa fa-angle-right assaltaStyle"></i>
                    </td>    
                    <td>{objectiu.description}</td>
                </tr>
            )
        })
    }
    render(){
        return(
            <div className="goalsView">
                <h4 className="titleCardStyle">Objectius</h4>
                <Table responsive>
                    <tbody>
                        {this.renderGoals()}
                    </tbody>
                    
                </Table>
            </div>
        )
    }
}

export default Objectius;
