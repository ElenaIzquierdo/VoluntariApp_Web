import React from "react";
import Base from "../components/base";
import '../css/tutoriesScreenStyle.css'
import {Button, Col, Table, Row} from "reactstrap";
import connect from "react-redux/es/connect/connect";
import Avatar from 'react-avatar';

class Tutories extends React.Component{

    pintarNom(nom,src){
        return(
            <Row className="nomMoniRowStyle">
                <Avatar size={35} round={true} src={src}/>
                <p className="nomMoniStyle">{nom}</p>
            </Row>
        )
    }

    pintarFilesEkip(){
        return this.props.ekip.map((persona)=>{
            return(
                <tr>
                    <td>{this.pintarNom(persona.name,persona.photo)}</td>
                    <td>
                        <Button outline color="secondary">Fer tutoria</Button>
                    </td>
                </tr>
            )
        })
    }

    pintarTutoriesFutures(){
        return this.props.next_tutories.map((tutoria)=>{
            return(
                <tr className="columnStyle">
                    <td>{tutoria.date}</td>
                    <td>{this.pintarNom(tutoria.moni,tutoria.photo)}</td>
                    <td>
                        <Button outline color="secondary">Fer tutoria</Button>
                    </td>
                </tr>
            )
        })
    }

    pintarTutoriesAnteriors(){
        return this.props.past_tutories.map((tutoria)=>{
            return(
                <tr className="columnStyle">
                    <td>{this.pintarNom(tutoria.moni,tutoria.photo_moni)}</td>
                    <td>{tutoria.date}</td>
                    <td>{this.pintarNom(tutoria.by,tutoria.photo_edu)}</td>
                    <td>
                        <Button outline color="secondary">Veure tutoria</Button>
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
                            <div className="cardEkipStyle">
                                <h4 className="titleCardStyle">Ekip</h4>
                                <Table responsive>
                                    <tbody>
                                        {this.pintarFilesEkip()}
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                        <Col sm="5">
                            <div className="cardEkipStyle">
                                <h4 className="titleCardStyle">Tutories properes</h4>
                                <Table responsive>
                                    <thead>
                                        <tr className="columnStyle">
                                            <th>Data propera tutoria</th>
                                            <th>Monitor/a</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.pintarTutoriesFutures()}
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                    <Row className="rowTutoAnteriors">
                        <Col sm="6">
                            <div className="cardEkipStyle">
                                <h4 className="titleCardStyle">Tutories anteriors</h4>
                                <Table responsive>
                                    <thead>
                                    <tr className="columnStyle">
                                        <th>Monitor/a</th>
                                        <th>Data</th>
                                        <th>Feta per</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.pintarTutoriesAnteriors()}
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
        ekip: state.tutoriesReducer.ekip,
        next_tutories: state.tutoriesReducer.next_tutories,
        past_tutories: state.tutoriesReducer.past_tutories
    }
};
const  mapDispatchToProps = (dispatch)=>{
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tutories);
