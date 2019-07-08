import React from "react";
import {
    Row
} from 'reactstrap';

class Comment extends React.Component {
    render(){
        return(
            <div style={{marginBottom: "3%"}}>
                <Row className="rowIcon2Style">
                    <i className="fa fa-user iconStyle"></i>
                    <h5> {this.props.author}</h5>
                </Row>
                <Row style={{marginLeft: "3%"}}>
                    <p>{this.props.content}</p>
                </Row>
                <p>{this.props.created_date}</p>
            </div>
        )
    }
}
export default Comment;
