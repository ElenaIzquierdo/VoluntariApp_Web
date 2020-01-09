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
    }

    renderAttenders(){
        if(!this.props.isFetching){
            return this.props.event.attenders.map((user)=>{
                return(
                    <Row style={{paddingLeft: '13%'}}>
                        <p className="text-grey-style">{user.username}</p>
                        <Input addon type="checkbox" className="checkBoxButton" checked={user.attendance_control}
                            onChange={this.checkOrUncheckControl.bind(this,user.id, user.attendance_control)}/>
                    </Row>
                )
            })
        }
        
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

    renderAvaluacio(){
        if(!this.props.isFetching){
            return(
                <div style={{paddingLeft: '3%'}}>
                    <Row>
                        <p className="text-grey-style">Berenar</p>
                        <InputGroupButtonDropdown isOpen={this.props.dropDowns_rate.snack} 
                                                    toggle={()=>this.props.changeDropDown("snack")} style={{marginLeft: '2%'}}>
                            <DropdownToggle caret value={this.props.rate.snack_rate}>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={()=>this.props.changeRateFormProperty("snack_rate","Baixa")}
                                                className="text-grey-style">
                                    Baixa
                                </DropdownItem>
                                <DropdownItem onClick={()=>this.props.changeRateFormProperty("snack_rate","Mitja")}
                                                className="text-grey-style">
                                    Mitja
                                </DropdownItem>
                                <DropdownItem onClick={()=>this.props.changeRateFormProperty("snack_rate","Alta")}
                                                className="text-grey-style">
                                    Alta
                                </DropdownItem>
                            </DropdownMenu>
                            <p style={{marginLeft:"1%"}}className="text-grey-style">{this.props.rate.snack_rate}</p>
                        </InputGroupButtonDropdown>
                    </Row>
                    <Row>
                        <p className="text-grey-style">Files</p>
                        <InputGroupButtonDropdown isOpen={this.props.dropDowns_rate.line} 
                                                    toggle={()=>this.props.changeDropDown("line")} style={{marginLeft: '2%'}}>
                            <DropdownToggle caret value={this.props.rate.line_rate}>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={()=>this.props.changeRateFormProperty("line_rate","Baixa")}
                                                className="text-grey-style">
                                    Baixa
                                </DropdownItem>
                                <DropdownItem onClick={()=>this.props.changeRateFormProperty("line_rate","Mitja")}
                                                className="text-grey-style">
                                    Mitja
                                </DropdownItem>
                                <DropdownItem onClick={()=>this.props.changeRateFormProperty("line_rate","Alta")}
                                                className="text-grey-style">
                                    Alta
                                </DropdownItem>
                            </DropdownMenu>
                            <p style={{marginLeft:"1%"}}className="text-grey-style">{this.props.rate.line_rate}</p>
                        </InputGroupButtonDropdown>
                    </Row>
                    <Row>
                        <p className="text-grey-style">Respecte</p>
                        <InputGroupButtonDropdown isOpen={this.props.dropDowns_rate.respect} 
                                                    toggle={()=>this.props.changeDropDown("respect")} style={{marginLeft: '2%'}}>
                            <DropdownToggle caret value={this.props.rate.respect_rate}>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={()=>this.props.changeRateFormProperty("respect_rate","Baixa")}
                                                className="text-grey-style">
                                    Baixa
                                </DropdownItem>
                                <DropdownItem onClick={()=>this.props.changeRateFormProperty("respect_rate","Mitja")}
                                                className="text-grey-style">
                                    Mitja
                                </DropdownItem>
                                <DropdownItem onClick={()=>this.props.changeRateFormProperty("respect_rate","Alta")}
                                                className="text-grey-style">
                                    Alta
                                </DropdownItem>
                            </DropdownMenu>
                            <p style={{marginLeft:"1%"}}className="text-grey-style">{this.props.rate.respect_rate}</p>
                        </InputGroupButtonDropdown>
                    </Row>
                    <Row>
                        <p className="text-grey-style">Activitat</p>
                        <InputGroupButtonDropdown isOpen={this.props.dropDowns_rate.activity} 
                                                    toggle={()=>this.props.changeDropDown("activity")} style={{marginLeft: '2%'}}>
                            <DropdownToggle caret value={this.props.rate.circle_rate}>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={()=>this.props.changeRateFormProperty("activity_rate","Baixa")}
                                                className="text-grey-style">
                                    Baixa
                                </DropdownItem>
                                <DropdownItem onClick={()=>this.props.changeRateFormProperty("activity_rate","Mitja")}
                                                className="text-grey-style">
                                    Mitja
                                </DropdownItem>
                                <DropdownItem onClick={()=>this.props.changeRateFormProperty("activity_rate","Alta")}
                                                className="text-grey-style">
                                    Alta
                                </DropdownItem>
                            </DropdownMenu>
                            <p style={{marginLeft:"1%"}}className="text-grey-style">{this.props.rate.activity_rate}</p>
                        </InputGroupButtonDropdown>
                    </Row>
                    <Row>
                        <p className="text-grey-style">Rotllana</p>
                            <InputGroupButtonDropdown isOpen={this.props.dropDowns_rate.circle} 
                                                    toggle={()=>this.props.changeDropDown("circle")} style={{marginLeft: '2%'}}>
                            <DropdownToggle caret value={this.props.rate.circle_rate}>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={()=>this.props.changeRateFormProperty("circle_rate","Baixa")}
                                                className="text-grey-style">
                                    Baixa
                                </DropdownItem>
                                <DropdownItem onClick={()=>this.props.changeRateFormProperty("circle_rate","Mitja")}
                                                className="text-grey-style">
                                    Mitja
                                </DropdownItem>
                                <DropdownItem onClick={()=>this.props.changeRateFormProperty("circle_rate","Alta")}
                                                className="text-grey-style">
                                    Alta
                                </DropdownItem>
                            </DropdownMenu>
                            <p style={{marginLeft:"1%"}}className="text-grey-style">{this.props.rate.circle_rate}</p>
                        </InputGroupButtonDropdown>
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
                            <h5 className="text-style">Control d'assistencia</h5>
                            {this.renderAttenders()}
                            {this.props.evaluation_done ? 
                                null:<Button outline onClick={this.acceptAttendance.bind(this)}>Passar llista</Button>}
                            
                        </div>
                        <div className="column-avaluation">
                            <h5 className="text-style">Avaluar activitat</h5>
                            {this.renderAvaluacio()}
                            {this.props.rate_done ? 
                                null:<Button outline onClick={this.avaluateEvent.bind(this)}>Avaluar</Button>}
                            
                            
                        </div>
                    </Row>
                    <Row style={{marginLeft:"13%", marginTop: '2%'}}>
                        <FormGroup>
                            <Label for="exampleFile">File</Label>
                            <Input type="file" name="file" id="exampleFile" onChange={this.fileSelectHandler.bind(this)}/>
                        </FormGroup>
                        <Button onClick={this.onSubmitFile.bind(this)}>Submit file</Button>
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
