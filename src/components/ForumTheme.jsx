import React from "react";
import {
    Row
} from 'reactstrap';
import '../css/forumthemeComponentStyle.css';
import { Link} from "react-router-dom";
import Moment from 'react-moment';

class ForumTheme extends React.Component{
    pintarEstat(){
        if(this.props.finished){
            return(
                <Row className="rowIcon2Style">
                    <i className="fa fa-times-circle closedStyle"></i>
                    <p className="text-style">Tancat</p>
                </Row>
            );
        }
        else{
            return(
                <Row className="rowIcon2Style">
                    <i className="fa fa-check-circle openedStyle"></i>
                    <p className="text-style">Obert</p>
                </Row>
            );
        }
    }
    
    render(){
        return(
            <div>
                <div className="card2Style">
                    <Link style={{ textDecoration: 'none' }} to={`viewforumtheme/${this.props.id}`}>
                        <h4 className="title2Style">{this.props.title}</h4>
                    </Link>

                    <Row className="rowIcon2Style">
                        <i className="fa fa-calendar iconStyle"></i>
                        <Row className="rowIcon2Style">
                            <Moment className="text-style" format="DD/MM/YYYY">{this.props.createdDate}</Moment>  
                        </Row>
                        
                    </Row>
                    <Row className="rowIcon2Style">
                        <i className="fa fa-comment iconStyle"></i>
                        <p className="text-style">{this.props.description}</p>
                    </Row>
                    {this.pintarEstat()}
                </div>
            </div>
        )
    }
}

export default ForumTheme;
