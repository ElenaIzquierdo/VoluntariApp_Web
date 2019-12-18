import React from "react";
import {
    Table
} from 'reactstrap';
import Moment from 'react-moment';

class Explicacions extends React.Component {

    renderExplicacions(){
        return this.props.explicacions.map((explicacio)=>{
            return(
                <tr>
                    <td>
                        <Moment className="dateExplicacio" format="DD/MM/YYYY">{explicacio.date}</Moment>   
                    </td>
                    <td>
                        <i className="fa fa-angle-right assaltaStyle"></i>
                    </td>    
                    <td>{explicacio.description}</td>
                </tr>
            )
        })
    }
    render(){
        return(
            <div className="explicacionsView">
                <h4 className="titleCardStyle">Explicació</h4>
                <Table responsive>
                    <tbody>
                        {this.renderExplicacions()}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Explicacions;
