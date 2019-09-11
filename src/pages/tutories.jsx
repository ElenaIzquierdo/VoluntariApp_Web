import React from "react";
import Base from "../components/base";
import '../css/tutoriesScreenStyle.css'
import {Button, Col, Table, Row} from "reactstrap";
import connect from "react-redux/es/connect/connect";
import Avatar from 'react-avatar';

class Tutories extends React.Component{

    pintarFiles(){
        return this.props.ekip.map((persona)=>{
            return(
                <tr>
                    <td><Avatar size={45} round={true} src={persona.photo}/></td>
                    <td>{persona.name}</td>
                    <td>
                        <Button outline color="secondary">Fer tutoria</Button>
                    </td>
                </tr>
            )
        })
    }

    render(){
        return(
            <div>
                <Base/>
                <div className="viewStyle">
                    <Row>
                        <Col sm="3">
                            <div className="cardBigStyle">
                                <h4 className="titleCardStyle">Ekip</h4>
                                <Table responsive>
                                    <tbody>
                                        {this.pintarFiles()}
                                    </tbody>
                                </Table>
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
        ekip: state.tutoriesReducer.ekip
    }
};
const  mapDispatchToProps = (dispatch)=>{
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tutories);
