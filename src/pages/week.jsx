import React from "react";
import Base from "../components/base";
import Activity from "../components/Activity";
import connect from "react-redux/es/connect/connect";
import {fetchWeek, fetchActivitiesFromWeek} from "../actions/weekActions";
import '../css/viewforumStyle.css';
import {
    Button,
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
                <Activity activity={activity}/>
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
                        <Link className="buttonCreateStyle" style={{textDecoration: 'none'}} to='/createForumTheme'>
                            <Button color="success" >Nova Activitat</Button>
                        </Link>
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
        activities: state.weekReducer.activities
    }
};
const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchWeek: (id)=>dispatch(fetchWeek(id)),
        fetchActivitiesFromWeek: (weekid)=>dispatch(fetchActivitiesFromWeek(weekid))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(week);
