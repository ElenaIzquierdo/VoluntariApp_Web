import React from "react";
import Base from "../components/base";
import '../css/eventScreenStyle.css';
import {
    Row,
    Col
} from 'reactstrap';
import connect from "react-redux/es/connect/connect";
import {fetchWeeksForQuarter, nextQuarter, previousQuarter, fetchWeeksForQuarterWithURL, getQuartersFromCours} from "../actions/eventsActions";
import WeeksTable from "../components/WeeksTable";

import { Dots } from 'react-activity';
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
            return(
                <div>
                    <Base/>
                    <div className="viewStyle">
                        <Row style={{marginTop:"3%"}}>
                            <Col md={{ size: 6, offset: 1 }}>
                                <WeeksTable quarter={this.props.quarters[this.props.quarter_iterator-1].name} activities={this.props.weeks} 
                                            nextQuarter={this.clickNextQuarter.bind(this)} previousQuarter={this.clickPreviousQuarter.bind(this)}
                                            fetchWeeksForQuarterWithURL={this.props.fetchWeeksForQuarterWithURL}
                                            quarter_iterator={this.props.quarter_iterator} fetchWeeksForQuarter={this.props.fetchWeeksForQuarter}/>
                            </Col>
                            <Col  md={{ size: 4 }} style={{marginLeft:"3%"}}>
                                <div className="cardStyle">
                                    <h5 className="titleCardStyle">Llegenda</h5>
                                    <hr/>
                                    <Row className="rowIconStyle">
                                        <i className="fa fa-star iconStarStyle"/>
                                        <p className="textIconStyle">Valoració mitjana</p>
                                    </Row>
                                    <div>
                                        <ul>
                                            És la mitjana de les valoracions de tota la setmana
                                        </ul>
                                    </div>
    
                                    <Row className="rowIconStyle">
                                        <i className="fa fa-users iconStyle"/>
                                        <p className="textIconStyle">Assistència</p>
                                    </Row>
                                    <div>
                                        <ul>
                                            <Row className="rowIconStyle">
                                                <i className="fa fa-angle-double-up assaltaStyle"/>
                                                <p>Alta</p>
                                            </Row>
                                        </ul>
                                        <ul>
                                            <Row className="rowIconStyle">
                                                <i className="fa fa-angle-up assmitjaStyle"/>
                                                <p>Mitja</p>
                                            </Row>
                                        </ul>
                                        <ul>
                                            <Row className="rowIconStyle">
                                                <i className="fa fa-angle-double-down assbaixaStyle"/>
                                                <p>Baixa</p>
                                            </Row>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
    
                    </div>
                </div>
            )
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

