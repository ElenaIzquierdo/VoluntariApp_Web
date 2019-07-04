import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <h3>Welcome! Llista de issues</h3>
            <Button>
                <Link to="/home2">New Issue</Link>
            </Button>
        </div>
    )
}

export default Home;
