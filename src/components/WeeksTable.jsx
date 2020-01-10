import React from "react";
import {
    Table,
    Row
} from 'reactstrap';
import { Link} from "react-router-dom";

class WeeksTable extends React.Component{
    renderRate(rate_avg, rate_percentage){
        console.log(rate_avg)
        if(rate_avg === 0){
            return <td> - ({rate_percentage}%)</td>
        }
        else{
            if(rate_avg === 1){
                return <td> <i className="fa fa-star iconStarStyle"></i>
                            ({rate_percentage}%)
                        </td>
            }
            else if(rate_avg === 2){
                return <td> <i className="fa fa-star iconStarStyle"></i>
                        <i className="fa fa-star iconStarStyle"></i> 
                        ({rate_percentage}%)
                    </td>
            }
            else if(rate_avg === 3){
                return <td> <i className="fa fa-star iconStarStyle"></i>
                        <i className="fa fa-star iconStarStyle"></i> 
                        <i className="fa fa-star iconStarStyle"></i> 
                        ({rate_percentage}%)
                    </td>
            }
            else if(rate_avg === 4){
                return <td> <i className="fa fa-star iconStarStyle"></i>
                        <i className="fa fa-star iconStarStyle"></i> 
                        <i className="fa fa-star iconStarStyle"></i>
                        <i className="fa fa-star iconStarStyle"></i> 
                        ({rate_percentage}%)
                    </td>
            }
            else if(rate_avg === 5){
                return <td> <i className="fa fa-star iconStarStyle"></i>
                        <i className="fa fa-star iconStarStyle"></i> 
                        <i className="fa fa-star iconStarStyle"></i>
                        <i className="fa fa-star iconStarStyle"></i> 
                        <i className="fa fa-star iconStarStyle"></i>
                        ({rate_percentage}%)
                    </td>
            }
            
        }
    }
    renderActivities(){
        return this.props.activities.results.map((activity)=>{
            return(
                <tr key={activity}>   
                    <Link style={{ textDecoration: 'none' }} to={`week/${activity.id}`}>
                        <td className="title-center">{activity.name}</td>
                    </Link>
                    {this.renderRate(activity.rate_avg, activity.rate_percentage)}   
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
                    </thead>
                    <tbody>
                        {this.renderActivities()}
                    </tbody>
                </Table>
                <Row style={{justifyContent: 'space-between'}}>
                    {this.props.activities.previous ? 
                        <i className="fa fa-arrow-left" style={{color: "#014029", marginLeft: "5%"}} 
                            onClick={()=>this.props.fetchWeeksForQuarterWithURL(this.props.activities.previous)}></i>:
                            <i style={{color: "#014029", marginLeft: "5%"}} ></i>
                    }
                    <h5 className="titleCardStyle">Pàgina {this.props.activities.current}</h5>
                    {this.props.activities.next ? 
                        <i className="fa fa-arrow-right" style={{color: "#014029", marginRight: "5%"}} 
                            onClick={()=>this.props.fetchWeeksForQuarterWithURL(this.props.activities.next)}></i>:
                        <i style={{color: "#014029", marginRight: "5%"}} ></i>
                    }
                    
                </Row>
            </div>
        )
    }
}

export default WeeksTable;
