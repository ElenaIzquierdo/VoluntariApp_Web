import React from "react";
import Base from "../components/base";
import Activity from "../components/Activity";
import connect from "react-redux/es/connect/connect";
import {fetchWeek, fetchActivitiesFromWeek, changeAttendanceControl, changeModal} from "../actions/weekActions";
import '../css/viewforumStyle.css';
import {
    Modal,
    Row
} from 'reactstrap';
import {Link} from "react-router-dom";

class week extends React.Component{
    componentWillMount(){
        this.props.fetchWeek(this.props.match.params.weekid)
        this.props.fetchActivitiesFromWeek(this.props.match.params.weekid)
    }

    renderActivities(){
        return this.props.activities.map((activity)=>{
            return(
                <Activity activity={activity} changeAttendanceControl={this.props.changeAttendanceControl}
                    modal={this.props.modal} fetchWeek={this.props.fetchWeek} weekid={this.props.match.params.weekid}/>
            )
        })
    }

    render(){
        return(
            <div>
                <Base/>
                <div className="viewStyle">
                    <Row style={{margin:"2%", color:"#014029", justifyContent:"space-between"}}>
                        <h4>{this.props.week.name}</h4>
                    </Row>
                    <div>
                        {this.renderActivities()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        week: state.weekReducer.week,
        isFetching: state.weekReducer.week,
        activities: state.weekReducer.activities,
        modal: state.weekReducer.modal
    }
};
const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchWeek: (id)=>dispatch(fetchWeek(id)),
        fetchActivitiesFromWeek: (weekid)=>dispatch(fetchActivitiesFromWeek(weekid)),
        changeAttendanceControl: (eventattendeeId,eventattendeeInfo)=>dispatch(changeAttendanceControl(eventattendeeId,eventattendeeInfo)),
        changeModal: ()=>dispatch(changeModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(week);
