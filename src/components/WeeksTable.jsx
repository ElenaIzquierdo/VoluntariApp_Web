import React from "react";
import {
    Table,
    Row
} from 'reactstrap';
import { Link} from "react-router-dom";

class WeeksTable extends React.Component{
    renderActivities(){
        return this.props.activities.results.map((activity)=>{
            return(
                <tr key={activity}>   
                    <Link style={{ textDecoration: 'none' }} to={`week/${activity.id}`}>
                        <td className="title-center">{activity.name}</td>
                    </Link>
                    <td>{activity.rate_avg}</td>
                    <td>{activity.attendance_avg}</td>
                </tr>
            )
        })
    }

    render(){
        return(
            <div className="activitiesView">
                <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
                <Row style={{justifyContent: 'space-between'}}>
                    <i className="fa fa-arrow-left" style={{color: "#014029", marginLeft: "5%"}} onClick={()=>this.props.previousQuarter()}></i>
                    <h4 className="titleCardStyle">{this.props.quarter}</h4>
                    <i className="fa fa-arrow-right" style={{color: "#014029", marginRight: "5%"}} onClick={()=>this.props.nextQuarter()}></i>
                </Row>
                
                <Table responsive>
                    <thead>
                        <th>SETMANA</th>
                        <th>VALORACIÓ MITJANA</th>
                        <th>ASSISTÈNCIA MITJANA</th>
                    </thead>
                    <tbody>
                        {this.renderActivities()}
                    </tbody>
                </Table>
                <Row style={{justifyContent: 'space-between'}}>
                    <i className="fa fa-arrow-left" style={{color: "#014029", marginLeft: "5%"}} onClick={()=>this.props.fetchWeeksForQuarterWithURL(this.props.activities.previous)}></i>
                    <h5 className="titleCardStyle">Pàgina {this.props.activities.current}</h5>
                    <i className="fa fa-arrow-right" style={{color: "#014029", marginRight: "5%"}} onClick={()=>this.props.fetchWeeksForQuarterWithURL(this.props.activities.next)}></i>
                </Row>
            </div>
        )
    }
}

export default WeeksTable;
