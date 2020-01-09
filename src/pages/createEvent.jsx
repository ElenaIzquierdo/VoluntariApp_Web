import React from "react";
import Base from "../components/base";
import {Button, Label, Input, Row,
        InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {Link, Redirect} from "react-router-dom";


import {changeCreateEventFormProperty, createEvent, changeDropDown} from "../actions/createEventActions";
import connect from "react-redux/es/connect/connect";

import DateTimePicker from 'react-datetime-picker';

class createEventForm extends React.Component {
    onPressAccept(){
        if(this.props.title !== "" && this.props.description !== "" && this.props.group !== ""){
            const topicInfo = {
                title: this.props.title,
                group: this.props.group,
                description: this.props.description
            };
            this.props.createEvent(topicInfo)
            this.renderRedirect()
        } 
    }

    renderRedirect = () => {
        return <Redirect to='/forum' />
      }

    selectDropDownOption(dropdownOption){
        this.props.changeCreateEventFormProperty("group",dropdownOption)
    }

    render(){
        if(this.props.new_topic){
            this.props.changeCreateEventFormProperty("new_topic", false);
            return <Redirect to={`/forum`}/>
        }
        return(
            <div>
                <Base/>
                <div className="viewStyle">
                    <div className="div-form">
                        <Label className="text-style" for="title" sm={2}>Títol</Label>
                        <Input name="title" id="title" required value={this.props.title} style={{marginLeft: '2%'}}
                                onChange={(event)=>this.props.changeCreateEventFormProperty("title",event.target.value)}/>
                        
                        <Label className="text-style" for="description" sm={2}>Descripció</Label>
                        <Input type="textarea" name="description" id="description" style={{marginLeft: '2%'}}
                            value={this.props.description}
                            onChange={(event)=>this.props.changeCreateEventFormProperty("description",event.target.value)}/>
                        
                        <Label className="text-style" for="description" sm={2}>Grup</Label>
                        <InputGroupButtonDropdown color="#014029" addonType="append" isOpen={this.props.dropdownOpen} 
                                                    toggle={()=>this.props.changeDropDown()} style={{marginLeft: '2%'}}>
                            <DropdownToggle caret value="{this.props.group}">
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={this.selectDropDownOption.bind(this,this.props.group_choices[0])} 
                                                className="text-grey-style">
                                    {this.props.group_choices[0]}
                                </DropdownItem>
                                <DropdownItem onClick={this.selectDropDownOption.bind(this,this.props.group_choices[1])}
                                                className="text-grey-style">
                                    {this.props.group_choices[1]}
                                </DropdownItem>
                                <DropdownItem onClick={this.selectDropDownOption.bind(this,this.props.group_choices[2])}
                                                className="text-grey-style">
                                    {this.props.group_choices[2]}
                                </DropdownItem>
                                <DropdownItem onClick={this.selectDropDownOption.bind(this,this.props.group_choices[3])}
                                                className="text-grey-style">
                                    {this.props.group_choices[3]}
                                </DropdownItem>
                                <DropdownItem onClick={this.selectDropDownOption.bind(this,this.props.group_choices[4])}
                                                className="text-grey-style">
                                    {this.props.group_choices[4]}
                                </DropdownItem>
                            </DropdownMenu>
                            <p style={{marginLeft:"1%"}}className="text-grey-style">{this.props.group}</p>
                        </InputGroupButtonDropdown>
                        
                        <Label className="text-style" for="description" sm={2}>Data inici</Label>
                        <DateTimePicker
                            selected={this.props.start_date}
                            onChange={(date)=>this.props.changeCreateEventFormProperty("start_date",date)}
                        />

                        <Label className="text-style" for="description" sm={2}>Data fi</Label>
                        <DateTimePicker
                            selected={this.props.start_date}
                            onChange={(date)=>this.props.changeCreateEventFormProperty("start_date",date)}
                        />
                    </div>

                    <Row style={{paddingLeft:"45%"}}>
                        <Button color="link" className="text-grey-style">
                            <Link style={{ textDecoration: 'none' }} to={"/forum"}>Cancel·lar</Link>
                        </Button>
                        <div style={{marginTop: '1%', marginLeft: '1%'}} className="comment-button" onClick={this.onPressAccept.bind(this)}>  
                            <p className="text-white">Crear</p> 
                        </div>
                        
                    </Row>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.createEventReducer.title,
        description: state.createEventReducer.description,
        group: state.createEventReducer.group,
        group_choices: state.createEventReducer.group_choices,
        dropdownOpen: state.createEventReducer.dropdownOpen,
        new_topic: state.createEventReducer.new_topic,
        start_date: state.createEventReducer.start_date
    }

};

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeCreateEventFormProperty : (propertyName, value) => dispatch(changeCreateEventFormProperty(propertyName, value)),
        createEvent: (eventInfo) => dispatch(createEvent(eventInfo)),
        changeDropDown: () => dispatch(changeDropDown()),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(createEventForm)
