import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../css/calendariScreenStyle.css';
import connect from "react-redux/es/connect/connect";
import {changeLoginFormProperty, changeErrorLoginMapProperty, resetErrorLoginMap, login} from "../actions/loginActions";
import { Redirect} from 'react-router-dom';

class LoginScreen extends React.Component{
    clickLogin(){
        const loginInfo = {
            username: this.props.email,
            password: this.props.password,
        };
        this.props.login(loginInfo)
    }
    render(){
        if(this.props.logged_in){
            this.props.changeLoginFormProperty("logged_in", false);
            return <Redirect to={`/`}/>
        }
        else{
            return(
                <div>
                    <div className="viewStyle">
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" value={this.props.email}
                                        onChange={(e) => this.props.changeLoginFormProperty("email",e.target.value)}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" value={this.props.password}
                                        onChange={(e) => this.props.changeLoginFormProperty("password",e.target.value)}/>
                            </FormGroup>
                            <Button onClick={this.clickLogin.bind(this)}>Accedir</Button>
                        </Form>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.loginReducer.email,
        password: state.loginReducer.password,
        errors: state.loginReducer.errors,
        logged_in: state.loginReducer.logged_in
    }
};

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeLoginFormProperty : (propertyName, value) => dispatch(changeLoginFormProperty(propertyName, value)),
        changeErrorLoginMapProperty: (propertyName) => dispatch(changeErrorLoginMapProperty(propertyName)),
        resetErrorLoginMap: () => dispatch(resetErrorLoginMap()),
        login: (loginInfo) => dispatch(login(loginInfo))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
