import React from "react";
import {
    Table
} from 'reactstrap';

class WeeksTable extends React.Component{
    renderActivities(){
        return this.props.activities.results.map((activity)=>{
            return(
                <tr key={activity}>   
                    <td>{activity.name}</td>
                    <td>{activity.start_date}</td>
                    <td>{activity.end_date}</td>
                    <td>{activity.rate_avg}</td>
                    <td>{activity.attendance_avg}</td>
                </tr>
            )
        })
    }
    render(){
        return(
            <div className="activitiesView">
                <h4 className="titleCardStyle">{this.props.title}</h4>
                <Table responsive>
                    <thead>
                        <th>Nom</th>
                        <th>Inici</th>
                        <th>Final</th>
                        <th>Valoració mitjana</th>
                        <th>Assistència mitjana</th>
                    </thead>
                    <tbody>
                        {this.renderActivities()}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default WeeksTable;
