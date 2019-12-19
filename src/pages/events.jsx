import React from "react";
import Base from "../components/base";
import '../css/eventScreenStyle.css';
import {
    Row,
    Col,
    InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import connect from "react-redux/es/connect/connect";
import {unshowWeek, showWeek} from "../actions/eventsActions";
import WeeksTable from "../components/WeeksTable";

class Events extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div>
                <Base/>
                <div className="viewStyle">
                    <Row>
                        <Col>
                            <InputGroupButtonDropdown color="#F2911B" addonType="append" style={{marginLeft:"5%"}}>
                                <DropdownToggle caret>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem >Primer trimestre</DropdownItem>
                                    <DropdownItem >Segon trimestre</DropdownItem>
                                    <DropdownItem >Tercer trimestre</DropdownItem>
                                </DropdownMenu>
                                <p style={{marginLeft:"1%"}}>Segon Trimestre</p>
                            </InputGroupButtonDropdown>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"3%"}}>
                        <Col md={{ size: 6, offset: 1 }}>
                            <WeeksTable title={"Activitats anteriors"} activities={{results:[]}}/>
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
                    <Row>
                        <Col md={{ size: 6, offset: 1 }}>
                            <WeeksTable title={"Activitats anteriors"} activities={{results:[]}}/>
                        </Col>
                    </Row>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showWeekBoolean: state.eventsReducer.showWeek
    }
};
const  mapDispatchToProps = (dispatch)=>{
    return {
        showWeek: ()=>dispatch(showWeek()),
        unshowWeek: ()=>dispatch(unshowWeek())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);

