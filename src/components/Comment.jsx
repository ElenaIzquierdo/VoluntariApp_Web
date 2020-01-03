import React from "react";
import {
    Row
} from 'reactstrap';
import Moment from 'react-moment';


class Comment extends React.Component {
    render(){
        return(
            <div className="div-comment">
                <Row>   
                    <h5 style={{marginLeft: '1%'}}> {this.props.user}</h5>
                </Row>
                <Row style={{marginLeft: "3%"}}>
                    <p className="text-grey-style">{this.props.content}</p>
                </Row>
                <Moment className="text-grey-style" style={{paddingLeft: "3%"}} format="DD/MM/YYYY HH:mm">{this.props.created_date}</Moment> 
            </div>
        )
    }
}
export default Comment;
