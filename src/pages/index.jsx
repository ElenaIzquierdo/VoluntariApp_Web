import React from "react";
import {
    Button
} from 'reactstrap';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import Base from "./base";

const Home = () =>{
    return(
        <div>
            <Base/>
            <h3>Welcome! Llista de issues</h3>
            <Button>
                <Link to="/home2">New Issue</Link>
            </Button>
        </div>
    )
}

export default Home;
