import React from "react";
import Base from "./base";
import '../css/eventScreenStyle.css';
import {
    Row,
    Table,
    Col
} from 'reactstrap';
import connect from "react-redux/es/connect/connect";
import {unshowWeek, showWeek} from "../actions/eventsActions";


class Events extends React.Component{
    pintarPlus(){
        if(this.props.showWeekBoolean){
            return(
                <i className="fa fa-minus-circle iconStyle"></i>
            );
        }
        else{
            return(
                <i className="fa fa-plus-circle iconStyle"></i>
            );
        }
    }

    onClickSpan(){
        if(this.props.showWeekBoolean){
            this.props.unshowWeek();
        }
        else{
            this.props.showWeek();
        }

    }

    ampliarFila(){
        return(
            <div>
                <td>
                    <span onClick={() => this.onClickSpan()}>
                        {this.pintarPlus()}
                    </span>

                </td>
                <td>03/06/2019</td>
                <td>
                    <i className="fa fa-star iconStarStyle"></i>
                    <i className="fa fa-star iconStarStyle"></i>
                    <i className="fa fa-star iconStarStyle"></i>
                </td>
                <td>
                    <i className="fa fa-angle-double-up assaltaStyle"></i>
                </td>
                <td>
                    <i className="fa fa-angle-double-up assaltaStyle"></i>
                </td>
                <td>
                    <i className="fa fa-eye iconStyle"></i>
                </td>
            </div>
        )
    }

    pintarFila(){
        return(
            <div>
                <td>
                    <span onClick={() => this.onClickSpan()}>
                        {this.pintarPlus()}
                    </span>

                </td>
                <td>03/06/2019</td>
                <td>
                    <i className="fa fa-star iconStarStyle"></i>
                    <i className="fa fa-star iconStarStyle"></i>
                    <i className="fa fa-star iconStarStyle"></i>
                </td>
                <td>
                    <i className="fa fa-angle-double-up assaltaStyle"></i>
                </td>
                <td>
                    <i className="fa fa-angle-double-up assaltaStyle"></i>
                </td>
                <td>
                    <i className="fa fa-eye iconStyle"></i>
                </td>
            </div>
        )
    }

    render(){
        return(
            <div>
                <Base/>
                <div className="viewStyle">
                    <h4 className="titleStyle">Activitats anteriors</h4>
                    <Row>
                        <Col sm="24" md={{ size: 6, offset: 3 }}>
                                <Table responsive>
                                    <thead>
                                    <tr className="columnStyle">
                                        <th></th>
                                        <th>Setmana</th>
                                        <th>Valoracio mitjana</th>
                                        <th>Assistencia voluntaris</th>
                                        <th>Assistencia infants</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="columnStyle">
                                        {this.props.showWeekBoolean ? this.ampliarFila(): this.pintarFila()}

                                    </tr>
                                    <tr className="columnStyle">
                                        <td>
                                            <span onClick={() => this.onClickSpan()}>
                                                {this.pintarPlus()}
                                            </span>
                                        </td>
                                        <td>27/05/2019</td>
                                        <td>
                                            <i className="fa fa-star iconStarStyle"></i>
                                            <i className="fa fa-star iconStarStyle"></i>
                                            <i className="fa fa-star iconStarStyle"></i>
                                            <i className="fa fa-star iconStarStyle"></i>
                                        </td>
                                        <td>
                                            <i className="fa fa-angle-up assmitjaStyle"></i>
                                        </td>
                                        <td>
                                            <i className="fa fa-angle-double-up assaltaStyle"></i>
                                        </td>
                                        <td>
                                            <i className="fa fa-eye iconStyle"></i>
                                        </td>
                                    </tr>
                                    <tr className="columnStyle">
                                        <td>
                                            <span onClick={() => this.onClickSpan()}>
                                                {this.pintarPlus()}
                                            </span>
                                        </td>
                                        <td>20/05/2019</td>
                                        <td>
                                            <i className="fa fa-star iconStarStyle"></i>
                                            <i className="fa fa-star iconStarStyle"></i>
                                        </td>
                                        <td>
                                            <i className="fa fa-angle-double-up assaltaStyle"></i>
                                        </td>
                                        <td>
                                            <i className="fa fa-angle-double-down assbaixaStyle"></i>
                                        </td>
                                        <td>
                                            <i className="fa fa-eye iconStyle"></i>
                                        </td>
                                    </tr>
                                    <tr className="columnStyle">
                                        <td>
                                           <span onClick={() => this.onClickSpan()}>
                                                {this.pintarPlus()}
                                            </span>
                                        </td>
                                        <td>20/05/2019</td>
                                        <td>
                                            <i className="fa fa-star iconStarStyle"></i>
                                            <i className="fa fa-star iconStarStyle"></i>
                                        </td>
                                        <td>
                                            <i className="fa fa-angle-double-up assaltaStyle"></i>
                                        </td>
                                        <td>
                                            <i className="fa fa-angle-double-down assbaixaStyle"></i>
                                        </td>
                                        <td>
                                            <i className="fa fa-eye iconStyle"></i>
                                        </td>
                                    </tr>
                                    <tr className="columnStyle">
                                        <td>
                                            <span onClick={() => this.onClickSpan()}>
                                                {this.pintarPlus()}
                                            </span>
                                        </td>
                                        <td>20/05/2019</td>
                                        <td>
                                            <i className="fa fa-star iconStarStyle"></i>
                                            <i className="fa fa-star iconStarStyle"></i>
                                        </td>
                                        <td>
                                            <i className="fa fa-angle-double-down assbaixaStyle"></i>
                                        </td>
                                        <td>
                                            <i className="fa fa-angle-double-up assaltaStyle"></i>
                                        </td>
                                        <td>
                                            <i className="fa fa-eye iconStyle"></i>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
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

