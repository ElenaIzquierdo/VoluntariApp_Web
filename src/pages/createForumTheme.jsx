import React from "react";
import Base from "../components/base";
import {Button, Col, Label, Input, Row,
        InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {Link, Redirect} from "react-router-dom";


import {changeCreateTopicFormProperty, createForumTopic, changeDropDown} from "../actions/createForumTopicActions";
import connect from "react-redux/es/connect/connect";

class CreateForumTheme extends React.Component {
    
    onPressAccept(){
        if(this.props.title !== "" && this.props.description !== "" && this.props.group !== ""){
            const topicInfo = {
                title: this.props.title,
                group: this.props.group,
                description: this.props.description
            };
            this.props.createForumTopic(topicInfo)
            this.renderRedirect()
        } 
    }

    renderRedirect = () => {
        return <Redirect to='/forum' />
      }

    selectDropDownOption(dropdownOption){
        this.props.changeCreateTopicFormProperty("group",dropdownOption)
    }

    render(){
        if(this.props.new_topic){
            this.props.changeCreateTopicFormProperty("new_topic", false);
            return <Redirect to={`/forum`}/>
        }
        return(
            <div>
                <Base/>
                <div className="viewStyle">
                    <Row form style={{marginTop:"3%"}}>
                        <Col md={10}>
                                    <Label for="title" sm={2}>Títol</Label>
                                    <Col sm={10}>
                                        <Input name="title" id="title" required value={this.props.title}
                                               onChange={(event)=>this.props.changeCreateTopicFormProperty("title",event.target.value)}/>
                                    </Col>
                                    <Label for="description" sm={2}>Descripció</Label>
                                    <Col sm={10}>
                                        <Input type="textarea" name="description" id="description"
                                               value={this.props.description}
                                               onChange={(event)=>this.props.changeCreateTopicFormProperty("description",event.target.value)}/>
                                    </Col>
                                    <Label for="description" sm={2}>Grup</Label>
                                    <Col sm={10}>
                                        <InputGroupButtonDropdown color="#F2911B" addonType="append" isOpen={this.props.dropdownOpen} toggle={()=>this.props.changeDropDown()}>
                                            <DropdownToggle caret value={this.props.group}>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem onClick={this.selectDropDownOption.bind(this,this.props.group_choices[0])}>{this.props.group_choices[0]}</DropdownItem>
                                                <DropdownItem onClick={this.selectDropDownOption.bind(this,this.props.group_choices[1])}>{this.props.group_choices[1]}</DropdownItem>
                                                <DropdownItem onClick={this.selectDropDownOption.bind(this,this.props.group_choices[2])}>{this.props.group_choices[2]}</DropdownItem>
                                                <DropdownItem onClick={this.selectDropDownOption.bind(this,this.props.group_choices[3])}>{this.props.group_choices[3]}</DropdownItem>
                                                <DropdownItem onClick={this.selectDropDownOption.bind(this,this.props.group_choices[4])}>{this.props.group_choices[4]}</DropdownItem>
                                            </DropdownMenu>
                                            <p style={{marginLeft:"1%"}}>{this.props.group}</p>
                                        </InputGroupButtonDropdown>
                                        
                                    </Col>

                                    <Row style={{marginLeft:"16%"}}>
                                        <Button color="link">
                                            <Link style={{ textDecoration: 'none' }} to={"/forum"}>Cancel·lar</Link>
                                        </Button>
                                        <Button color="success" onClick={this.onPressAccept.bind(this)}>Crear</Button>
                                    </Row>

                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.createForumTopicReducer.title,
        description: state.createForumTopicReducer.description,
        group: state.createForumTopicReducer.group,
        group_choices: state.createForumTopicReducer.group_choices,
        dropdownOpen: state.createForumTopicReducer.dropdownOpen,
        new_topic: state.createForumTopicReducer.new_topic
    }

};

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeCreateTopicFormProperty : (propertyName, value) => dispatch(changeCreateTopicFormProperty(propertyName, value)),
        createForumTopic: (topicInfo) => dispatch(createForumTopic(topicInfo)),
        changeDropDown: () => dispatch(changeDropDown()),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CreateForumTheme)
