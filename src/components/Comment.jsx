import React from "react";
import {
    Row
} from 'reactstrap';
import Moment from 'react-moment';


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
                <Moment style={{paddingLeft: "3%"}} format="DD/MM/YYYY HH:mm">{this.props.created_date}</Moment> 
            </div>
        )
    }
}
export default Comment;
