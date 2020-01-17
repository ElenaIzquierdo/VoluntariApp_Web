import React from "react";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import connect from "react-redux/es/connect/connect";
import {changeLoginFormProperty, changeErrorLoginMapProperty, resetErrorLoginMap, login} from "../actions/loginActions";
import { Link, Redirect} from 'react-router-dom';
import logo from '../images/VoluntariApp_Logo.png';

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
                    <div className="login-view">
                        <h2>Benvingut a VoluntariApp!</h2>
                        <img src={logo} className="logo-login"></img>
                        <Form style={{width: '40%', marginLeft: '30%'}}>
                            <FormGroup>
                                <Label className="text-style" for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" value={this.props.email}
                                        onChange={(e) => this.props.changeLoginFormProperty("email",e.target.value)}/>
                            </FormGroup>
                            <FormGroup>
                                <Label className="text-style" for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" value={this.props.password}
                                        onChange={(e) => this.props.changeLoginFormProperty("password",e.target.value)}/>
                            </FormGroup>
                            <Link className="button-login" style={{textDecoration: 'none'}}>
                                <div className="button-login" onClick={this.clickLogin.bind(this)}>  
                                    <p className="text-white">Nou Tema</p> 
                                </div>
                            </Link>
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
