import React from "react";
import Base from "../components/base";
import connect from "react-redux/es/connect/connect";
import {fetchEvent, changeAttendanceControl, deleteEventAttendee, 
        createRateEvent, changeRateFormProperty, changeDropDown, evaluationDone, 
        rateDone, uploadFile, putFileEvent} from "../actions/avaluacioActions";
import '../css/viewforumStyle.css';
import {
    Row,
    Input,FormGroup, Label,Form, Button,
    InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, 
} from 'reactstrap';
import {Link, Redirect} from "react-router-dom";

class avaluacio extends React.Component{
    componentWillMount(){
        this.props.fetchEvent(this.props.match.params.eventid)
    }

    checkOrUncheckControl(id, attendance_control){
        const info = {
            id: id,
            attendance_control: !attendance_control
        };
        this.props.changeAttendanceControl(id, info)
        this.props.fetchEvent(this.props.match.params.eventid)
    }

    acceptAttendance(){
        var i
        for(i =0; i < this.props.event.attenders.length; i++){
            if(!this.props.event.attenders[i].attendance_control){
                this.props.deleteEventAttendee(this.props.event.attenders[i].id)
            }
        }
        this.props.evaluationDone();
        if(this.props.rate_done){
            return <Redirect to={`week/${this.props.event.week}`}/>
        }
    }

    renderAttenders(){
        if(!this.props.isFetching){
            return this.props.event.attenders.map((user)=>{
                return(
                    <Row style={{paddingLeft: '13%', paddingTop: '1%'}}>
                        <p className="text-grey-style">{user.username}</p>
                        <Input addon type="checkbox" className="checkBoxButton" checked={user.attendance_control}
                            onChange={this.checkOrUncheckControl.bind(this,user.id, user.attendance_control)}/>
                    </Row>
                )
            })
        }
        
    }

    renderRedirect = () => {
        return (<Redirect to='/forum' />);
      }

    avaluateEvent(){
        const mapRate = {
            Baixa: 0,
            Mitja: 1,
            Alta: 2
        }
        const info = {
            event: this.props.event.id,
            comments: this.props.rate.comments,
            snack_rate: mapRate[this.props.rate.snack_rate],
            circle_rate: mapRate[this.props.rate.circle_rate],
            line_rate: mapRate[this.props.rate.line_rate],
            respect_rate: mapRate[this.props.rate.respect_rate],
            activity_rate: mapRate[this.props.rate.activity_rate],
        };
        this.props.createRateEvent(info);
        this.props.rateDone();
    }

    handleOptionChange = (changeEvent) =>{
        console.log(changeEvent)
    }

    renderAvaluacio(){
        if(!this.props.isFetching){
            return(
                <div style={{paddingLeft: '3%'}}>
                    <Row>
                        <p className="text-grey-style">Berenar</p>
                        <FormGroup check>
                            <Label check className="text-grey-style">
                                <Input type="radio" name="snack_rate" value="Alta" 
                                    onClick={()=>this.props.changeRateFormProperty("snack_rate","Alta")}/>{' '}
                               Alta
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check className="text-grey-style">
                                <Input type="radio" name="snack_rate" value="Mitja"
                                    onClick={()=>this.props.changeRateFormProperty("snack_rate","Mitja")}/>{' '}
                               Mitja
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check className="text-grey-style">
                                <Input type="radio" name="snack_rate" value="Baixa" 
                                    onClick={()=>this.props.changeRateFormProperty("snack_rate","Baixa")}/>{' '}
                               Baixa
                            </Label>
                        </FormGroup>
                    </Row>
                    <Row>
                        <p className="text-grey-style">Files</p>
                        <FormGroup check>
                            <Label check className="text-grey-style">
                                <Input type="radio" name="line_rate" value="Alta" 
                                    onClick={()=>this.props.changeRateFormProperty("line_rate","Alta")}/>{' '}
                               Alta
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check className="text-grey-style">
                                <Input type="radio" name="line_rate" value="Mitja"
                                    onClick={()=>this.props.changeRateFormProperty("line_rate","Mitja")}/>{' '}
                               Mitja
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check className="text-grey-style">
                                <Input type="radio" name="line_rate" value="Baixa" 
                                    onClick={()=>this.props.changeRateFormProperty("line_rate","Baixa")}/>{' '}
                               Baixa
                            </Label>
                        </FormGroup>
                    </Row>
                    <Row>
                        <p className="text-grey-style">Respecte</p>
                        <FormGroup check>
                            <Label check className="text-grey-style">
                                <Input type="radio" name="respect_rate" value="Alta" 
                                    onClick={()=>this.props.changeRateFormProperty("respect_rate","Alta")}/>{' '}
                               Alta
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check className="text-grey-style">
                                <Input type="radio" name="respect_rate" value="Mitja"
                                    onClick={()=>this.props.changeRateFormProperty("respect_rate","Mitja")}/>{' '}
                               Mitja
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check className="text-grey-style">
                                <Input type="radio" name="respect_rate" value="Baixa" 
                                    onClick={()=>this.props.changeRateFormProperty("respect_rate","Baixa")}/>{' '}
                               Baixa
                            </Label>
                        </FormGroup>
                    </Row>
                    <Row>
                        <p className="text-grey-style">Activitat</p>
                        <FormGroup check>
                            <Label check className="text-grey-style">
                                <Input type="radio" name="activity_rate" value="Alta" 
                                    onClick={()=>this.props.changeRateFormProperty("activity_rate","Alta")}/>{' '}
                               Alta
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check className="text-grey-style">
                                <Input type="radio" name="activity_rate" value="Mitja"
                                    onClick={()=>this.props.changeRateFormProperty("activity_rate","Mitja")}/>{' '}
                               Mitja
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check className="text-grey-style">
                                <Input type="radio" name="activity_rate" value="Baixa" 
                                    onClick={()=>this.props.changeRateFormProperty("activity_rate","Baixa")}/>{' '}
                               Baixa
                            </Label>
                        </FormGroup>
                    </Row>
                    <Row>
                        <p className="text-grey-style">Rotllana</p>
                        <FormGroup check>
                            <Label check className="text-grey-style">
                                <Input type="radio" name="circle_rate" value="Alta" 
                                    onClick={()=>this.props.changeRateFormProperty("circle_rate","Alta")}/>{' '}
                               Alta
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check className="text-grey-style">
                                <Input type="radio" name="circle_rate" value="Mitja"
                                    onClick={()=>this.props.changeRateFormProperty("circle_rate","Mitja")}/>{' '}
                               Mitja
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check className="text-grey-style">
                                <Input type="radio" name="circle_rate" value="Baixa" 
                                    onClick={()=>this.props.changeRateFormProperty("circle_rate","Baixa")}/>{' '}
                               Baixa
                            </Label>
                        </FormGroup>
                    </Row>
                    <div>
                        <p className="text-grey-style">Comentaris diari de sortida</p>
                        <Form style={{width: '65%'}}>
                            <FormGroup>
                                <Input type="textarea" name="text" id="exampleText" value={this.props.rate.comments}
                                        onChange={(event)=>this.props.changeRateFormProperty("comments",event.target.value)}/>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            )
        }
    }

    fileSelectHandler = (event) => {
        this.props.uploadFile(event.target.value)
    }

    onSubmitFile(){
        const activityInfo = {
            activity_file: this.props.activity_file,
        };
        console.log(activityInfo)
        this.props.putFileEvent(this.props.event.id, activityInfo)
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
                            <h5 className="text-style">Control d'assistència</h5>
                            <div style={{paddingTop:'2%', height: '295px'}}>
                                {this.renderAttenders()}
                            </div>
                                
                            {this.props.evaluation_done ? 
                                null:
                                <Link className="buttonCreateStyle" style={{textDecoration: 'none'}}>
                                    <div className="buttonCreateStyle" onClick={this.acceptAttendance.bind(this)}>  
                                        <p className="text-white">Passar llista</p> 
                                    </div>
                                </Link>
                            }
                            
                        </div>
                        <div className="column-avaluation">
                            <h5 className="text-style">Avaluar activitat</h5>
                            <div style={{paddingTop:'2%', height: '295px'}}>
                                {this.renderAvaluacio()}
                            </div>
                            {this.props.rate_done ? 
                                null:
                                <Link className="buttonCreateStyle" style={{textDecoration: 'none'}}>
                                    <div className="buttonCreateStyle" onClick={this.avaluateEvent.bind(this)}>  
                                        <p className="text-white">Avaluar</p> 
                                    </div>
                                </Link>
                            }  
                            {this.props.rate_done && this.props.evaluation_done ? 
                                <Link className="buttonCreateStyle" style={{textDecoration: 'none'}} to={`/week/${this.props.event.week}`}>
                                    <div className="buttonCreateStyle">  
                                        <p className="text-white">Finalitzar</p> 
                                    </div>
                                </Link>:null
                            }  
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
        rate: state.avaluacioReducer.rate,
        dropDowns_rate: state.avaluacioReducer.dropDowns_rate,
        rate_done: state.avaluacioReducer.rate_done,
        evaluation_done: state.avaluacioReducer.evaluation_done,
        activity_file: state.avaluacioReducer.activity_file
    }
};
const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchEvent: (id)=>dispatch(fetchEvent(id)),
        changeAttendanceControl: (id, info)=>dispatch(changeAttendanceControl(id, info)),
        deleteEventAttendee: (id)=>dispatch(deleteEventAttendee(id)),
        createRateEvent: (rateInfo)=>dispatch(createRateEvent(rateInfo)),
        changeRateFormProperty: (propertyName, value)=>dispatch(changeRateFormProperty(propertyName,value)),
        changeDropDown: (dropdown)=>dispatch(changeDropDown(dropdown)),
        evaluationDone: ()=>dispatch(evaluationDone()),
        rateDone: ()=>dispatch(rateDone()),
        uploadFile: (file)=>dispatch(uploadFile(file)),
        putFileEvent: (id, info)=>dispatch(putFileEvent(id,info))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(avaluacio);
