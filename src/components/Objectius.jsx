import React from "react";
import {
    Table,
    Row
} from 'reactstrap';

class Objectius extends React.Component{
    renderGoals(){
        return this.props.objectius.results.map((objectiu)=>{
            return(
                <tr key={objectiu}>
                    <td className="text-table-rows-style">
                        <i className="fa fa-angle-right assaltaStyle"></i>
                    </td>    
                    <td className="text-table-rows-style">{objectiu.description}</td>
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

                <Row style={{justifyContent: 'space-between'}}>
                    {this.props.objectius.previous ? 
                        <i className="fa fa-arrow-left" style={{color: "#014029", marginLeft: "5%"}} 
                            onClick={()=>this.props.fetchObjectiusWithURL(this.props.objectius.previous)}></i>:
                            <i style={{color: "#014029", marginLeft: "5%"}} ></i>
                    }
                    <h5 className="titleCardStyle">Pàgina {this.props.objectius.current}</h5>
                    {this.props.objectius.next ? 
                        <i className="fa fa-arrow-right" style={{color: "#014029", marginRight: "5%"}} 
                            onClick={()=>this.props.fetchObjectiusWithURL(this.props.objectius.next)}></i>:
                            <i style={{color: "#014029", marginLeft: "5%"}} ></i>
                    }
                    
                </Row>
            </div>
        )
    }
}

export default Objectius;
