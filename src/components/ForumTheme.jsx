import React from "react";
import {
    Row,
    Button
} from 'reactstrap';
import '../css/forumthemeComponentStyle.css';

class ForumTheme extends React.Component{
    render(){
        return(
            <div>
                <div className="card2Style">
                    <h4 className="title2Style">{this.props.title}</h4>
                    <Row className="rowIcon2Style">
                        <i className="fa fa-calendar iconStyle"></i>
                        <p className="textIconStyle">Creat el dia {this.props.createdDate}</p>
                    </Row>
                    <Row className="rowIcon2Style">
                        <i className="fa fa-comment iconStyle"></i>
                        <p className="textIconStyle">Descripcio: {this.props.description}</p>
                    </Row>
                </div>
            </div>
        )
    }
}

export default ForumTheme;
