import React from "react";
import {
    Table, Row
} from 'reactstrap';
import Moment from 'react-moment';

class Explicacions extends React.Component {

    renderExplicacions(){
        return this.props.explicacions.results.map((explicacio)=>{
            return(
                <tr key={explicacio.id}>
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
                <Row style={{justifyContent: 'space-between'}}>
                    {this.props.explicacions.previous ? 
                        <i className="fa fa-arrow-left" style={{color: "#014029", marginLeft: "5%"}} 
                            onClick={()=>this.props.fetchExplicacionsWithURL(this.props.explicacions.previous)}></i>:
                        <i style={{color: "#014029", marginLeft: "5%"}} ></i>
                    }   
                    <h5 className="titleCardStyle">Pàgina {this.props.explicacions.current}</h5>
                    {this.props.explicacions.next ? 
                        <i className="fa fa-arrow-right" style={{color: "#014029", marginRight: "5%"}} 
                        onClick={()=>this.props.fetchExplicacionsWithURL(this.props.explicacions.next)}></i>:
                        <i style={{color: "#014029", marginLeft: "5%"}} ></i>
                    }
                    
                </Row>
            </div>
        )
    }
}

export default Explicacions;
