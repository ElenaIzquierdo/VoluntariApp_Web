import React from "react";
import Base from "../components/base";
import connect from "react-redux/es/connect/connect";
import {fetchEvent} from "../actions/avaluacioActions";
import '../css/viewforumStyle.css';
import {
    Modal,
    Row,
    Input,FormGroup, Label,Form
} from 'reactstrap';
import {Link} from "react-router-dom";

class avaluacio extends React.Component{
    componentWillMount(){
        this.props.fetchEvent(this.props.match.params.eventid)
    }

    renderAttenders(){
        if(!this.props.isFetching){
            return this.props.event.attenders.map((user)=>{
                return(
                    <Row style={{paddingLeft: '13%'}}>
                        <p className="text-grey-style">{user.username}</p>
                        <Input addon type="checkbox" className="checkBoxButton" checked={user.attendance_control}/>
                    </Row>
                )
            })
        }
        
    }

    renderAvaluacio(){
        if(!this.props.isFetching){
            return(
                <div style={{paddingLeft: '3%'}}>
                    <Row>
                        <p className="text-grey-style">Berenar</p>
                            <Label check className="text-grey-style" style={{marginLeft: '5%'}}>
                                <Input type="radio" name="radio1" />
                                Malament
                            </Label>
                            <Label check className="text-grey-style" style={{marginLeft: '5%'}}>
                                <Input type="radio" name="radio1" />
                                Mig
                            </Label>
                            <Label check className="text-grey-style" style={{marginLeft: '5%'}}>
                                <Input type="radio" name="radio1"/>
                                Be
                            </Label>
                    </Row>
                    <Row>
                        <p className="text-grey-style">Files</p>
                        <Label check className="text-grey-style" style={{marginLeft: '5%'}}>
                                <Input type="radio" name="radio1" />
                                Malament
                            </Label>
                            <Label check className="text-grey-style" style={{marginLeft: '5%'}}>
                                <Input type="radio" name="radio1" />
                                Mig
                            </Label>
                            <Label check className="text-grey-style" style={{marginLeft: '5%'}}>
                                <Input type="radio" name="radio1"/>
                                Be
                            </Label>
                    </Row>
                    <Row>
                        <p className="text-grey-style">Respecte</p>
                        <Label check className="text-grey-style" style={{marginLeft: '5%'}}>
                                <Input type="radio" name="radio1" />
                                Malament
                            </Label>
                            <Label check className="text-grey-style" style={{marginLeft: '5%'}}>
                                <Input type="radio" name="radio1" />
                                Mig
                            </Label>
                            <Label check className="text-grey-style" style={{marginLeft: '5%'}}>
                                <Input type="radio" name="radio1"/>
                                Be
                            </Label>
                    </Row>
                    <Row>
                        <p className="text-grey-style">Activitat</p>
                        <Label check className="text-grey-style" style={{marginLeft: '5%'}}>
                                <Input type="radio" name="radio1" />
                                Malament
                            </Label>
                            <Label check className="text-grey-style" style={{marginLeft: '5%'}}>
                                <Input type="radio" name="radio1" />
                                Mig
                            </Label>
                            <Label check className="text-grey-style" style={{marginLeft: '5%'}}>
                                <Input type="radio" name="radio1"/>
                                Be
                            </Label>
                    </Row>
                    <Row>
                        <p className="text-grey-style">Rotllana</p>
                        <Label check className="text-grey-style" style={{marginLeft: '5%'}}>
                                <Input type="radio" name="radio1" />
                                Malament
                            </Label>
                            <Label check className="text-grey-style" style={{marginLeft: '5%'}}>
                                <Input type="radio" name="radio1" />
                                Mig
                            </Label>
                            <Label check className="text-grey-style" style={{marginLeft: '5%'}}>
                                <Input type="radio" name="radio1"/>
                                Be
                            </Label>
                    </Row>
                    <div>
                        <p className="text-grey-style">Comentaris diari de sortida</p>
                        <Form style={{width: '65%'}}>
                            <FormGroup>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                <Base/>
                <div className="viewStyle">
                    <Row style={{marginLeft:"13%", justifyContent:"space-between", marginTop: '2%'}}>
                        <h4>{this.props.event.title}</h4>
                    </Row>
                    <Row style={{marginLeft:"13%", marginTop: '2%'}}>
                        <div className="column-avaluation">
                            <h5 className="text-style">Control d'assistencia</h5>
                            {this.renderAttenders()}
                        </div>
                        <div className="column-avaluation">
                            <h5 className="text-style">Avaluar activitat</h5>
                            {this.renderAvaluacio()}
                        </div>
                    </Row>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        event: state.avaluacioReducer.event,
        isFetching: state.avaluacioReducer.week,
    }
};
const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchEvent: (id)=>dispatch(fetchEvent(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(avaluacio);
