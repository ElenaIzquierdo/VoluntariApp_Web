import React from "react";
import {
    Row,
    Button
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
                <Row style={{marginLeft: "3%"}}>
                    <Moment className="text-grey-style" format="DD/MM/YYYY HH:mm">
                        {this.props.created_date}
                    </Moment> 
                    {this.props.owner?
                        <Button style={{textAlign:'center', paddingTop: '0px', fontSize: '12px'}} color="link">
                            Eliminar
                        </Button>
                    :null}
                </Row>
                
            </div>
        )
    }
}
export default Comment;
