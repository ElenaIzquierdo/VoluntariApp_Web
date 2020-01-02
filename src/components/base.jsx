import React from "react";
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import '../css/homeStyle.css'
import logo from '../images/VoluntariApp_Logo.png';

class Base extends React.Component{
    render(){
        return(
            <div className="navbar-style">
                <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
                <Navbar expand="sm" className="navbar-content-style">
                    <Nav navbar>
                        <img src={logo} className="logo-style"></img>
                        <NavItem className="navbar-item-style">
                            <NavLink className="text-style" href="/">INICI</NavLink>
                        </NavItem>
                        <NavItem className="navbar-item-style">
                            <NavLink className="text-style" href="/events">ESDEVENIMENTS</NavLink>
                        </NavItem>
                        <NavItem className="navbar-item-style">
                            <NavLink className="text-style" href="/forum">FORUM</NavLink>
                        </NavItem>
                        <NavItem className="navbar-item-style">
                            <NavLink className="text-style" href="/centre-interes">CENTRE INTERES</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Base;
