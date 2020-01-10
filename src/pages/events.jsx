import React from "react";
import Base from "../components/base";
import '../css/eventScreenStyle.css';
import '../css/homeStyle.css';
import {
    Row,
    Col
} from 'reactstrap';
import connect from "react-redux/es/connect/connect";
import {fetchWeeksForQuarter, nextQuarter, previousQuarter, fetchWeeksForQuarterWithURL, getQuartersFromCours} from "../actions/eventsActions";
import WeeksTable from "../components/WeeksTable";
import {Redirect} from "react-router-dom";
import 'react-activity/dist/react-activity.css';
import { Spinner } from 'react-activity';
import 'react-activity/dist/react-activity.css';

class Events extends React.Component{

    componentDidUpdate(prevProps) {
        if (prevProps.quarter_iterator !== this.props.quarter_iterator) {
            this.props.fetchWeeksForQuarter(this.props.quarter_iterator)
        }
    }
    componentWillMount(){
        this.props.getQuartersFromCours(1)
        this.props.fetchWeeksForQuarter(this.props.quarter_iterator)
    }

    clickPreviousQuarter(){
        this.props.previousQuarter()
    }
    clickNextQuarter(){
        this.props.nextQuarter()
    }

    render(){
        if(localStorage.getItem('token') === null){
            return <Redirect to={`/login`}/>
        }
        else if(this.props.isFetching){
            return(
                <div className="viewStyle content-center">
                    <Spinner size={35} color='#F2A71B'/>
                </div>
            )
        }
        else{
            return(
                <div>
                    <Base/>
                    <div className="viewStyle">
                    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
                        <Row style={{marginTop:"3%"}}>
                            <Col md={{ size: 6, offset: 1 }}>
                                <WeeksTable quarter={this.props.quarters[this.props.quarter_iterator-1].name} activities={this.props.weeks} 
                                            nextQuarter={this.clickNextQuarter.bind(this)} previousQuarter={this.clickPreviousQuarter.bind(this)}
                                            fetchWeeksForQuarterWithURL={this.props.fetchWeeksForQuarterWithURL}
                                            quarter_iterator={this.props.quarter_iterator} fetchWeeksForQuarter={this.props.fetchWeeksForQuarter}/>
                            </Col>
                            <Col  md={{ size: 4 }} style={{marginLeft:"3%"}}>
                                <div className="cardStyle">
                                    <h3 className="titleCardStyle">LLEGENDA</h3>
                                    <hr/>
                                    <Row className="rowIconStyle">
                                        <p className="text-style">VALORACIÓ MITJANA</p>
                                    </Row>
                                    <div>
                                        <p className="text-style">És la mitjana de les valoracions de tota la setmana</p>
                                        <p className="text-style">Entre parèntesis hi ha el percentatge d'activitats valorades</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
    
                    </div>
                </div>
            )
        }    
    }
}

const mapStateToProps = (state) => {
    return {
        weeks: state.eventsReducer.weeks,
        isFetching: state.eventsReducer.isFetching,
        quarters: state.eventsReducer.quarters,
        quarter_iterator: state.eventsReducer.quarter_iterator
    }
};
const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchWeeksForQuarter: (quarter)=>dispatch(fetchWeeksForQuarter(quarter)),
        nextQuarter: ()=> dispatch(nextQuarter()),
        previousQuarter: ()=>dispatch(previousQuarter()),
        fetchWeeksForQuarterWithURL: (url)=>dispatch(fetchWeeksForQuarterWithURL(url)),
        getQuartersFromCours: (cours)=>dispatch(getQuartersFromCours(cours))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);

