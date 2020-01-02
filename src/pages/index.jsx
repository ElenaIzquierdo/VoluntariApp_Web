import React from "react";
import Base from "../components/base";
import {
    Row,
    Col,
    Button,
    Table
} from 'reactstrap';
import connect from "react-redux/es/connect/connect";
import {} from "../actions/homeActions";
import {Link} from "react-router-dom";


class Home extends React.Component{
    constructor(props) {
        super(props);
    }



    render(){
        
        return(
            <div>
                <Base/>
                <div className="viewStyle">
                    <div className="cardsRow">
                        <Row>
                            <Col sm="6">
                                <div className="cardEventStyle">
                                    <h4 className="titleCardStyle">Propera activitat</h4>
                                    <hr></hr>
                                    <Row className="rowIconStyle">
                                        <i className="fa fa-calendar iconStyle"></i>
                                        <p className="textIconStyle">Dilluns 16 de maig</p>
                                    </Row>
                                    <Row className="rowIconStyle">
                                        <i className="fa fa-users iconStyle"></i>
                                        <p className="textIconStyle">Assistents 3/4</p>
                                    </Row>
                                    <Row className="rowIconStyle">
                                        <i className="fa fa-map-pin iconStyle"></i>
                                        <p className="textIconStyle">Grup Petits</p>
                                    </Row>
                                    <hr></hr>
                                    <div className="footerStyle">
                                        <Link style={{ textDecoration: 'none' }} to={`viewEventProper/${this.props.idProva}`}>
                                            <Button color="link">Veure més</Button>
                                        </Link>
                                    </div>
                                </div>
                            </Col>

                            <Col sm="6">
                                <div className="cardBigStyle">
                                    <h4 className="titleCardStyle">Activitats anteriors</h4>
                                    <hr></hr>
                                    <Table responsive>
                                        <thead>
                                        <tr className="columnStyle">
                                            <th>Setmana</th>
                                            <th>Valoracio mitjana</th>
                                            <th>Assistencia</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="columnStyle">
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
                                                <i className="fa fa-eye iconStyle"></i>
                                            </td>
                                        </tr>
                                        <tr className="columnStyle">
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
                                                <i className="fa fa-eye iconStyle"></i>
                                            </td>
                                        </tr>
                                        <tr className="columnStyle">
                                            <td>20/05/2019</td>
                                            <td>
                                                <i className="fa fa-star iconStarStyle"></i>
                                                <i className="fa fa-star iconStarStyle"></i>
                                            </td>
                                            <td>
                                                <i className="fa fa-angle-double-down assbaixaStyle"></i>
                                            </td>
                                            <td>
                                                <i className="fa fa-eye iconStyle"></i>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                    <hr></hr>
                                    <div className="footerStyle">
                                        <Button color="link">Veure més</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
};
const  mapDispatchToProps = (dispatch)=>{
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
