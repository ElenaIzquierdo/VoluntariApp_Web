import React from "react";
import Base from "../components/base";
import connect from "react-redux/es/connect/connect";
import {} from "../actions/viewforumthemeActions";
import {Row, Button} from "reactstrap";
import Comment from "../components/Comment";
import Textarea from 'react-textarea-autosize';
import '../css/viewforumStyle.css';

class viewForumTheme extends React.Component{
    pintarComments(){
        return this.props.comments.map((comment)=>{
                return(
                    <Comment key={comment.id} author={comment.author} content={comment.content}
                             created_date={comment.created_date}/>
                );
            }
        );

    }

    pintarHeader(){
        if(this.props.forumtheme.finished){
            return(
                <Row>
                    <h4 className="title2ScreenStyle">{this.props.forumtheme.title}</h4>
                    <Button outline color="success" className="buttonopencloseStyle">Obrir</Button>
                </Row>
            );
        }
        else{
            return(
                <Row>
                    <h4 className="title2ScreenStyle">{this.props.forumtheme.title}</h4>
                    <Button outline color="danger" className="buttonopencloseStyle">Tancar</Button>
                </Row>
            );
        }

    }

    pintarEstat(){
        if(this.props.finished){
            return(
                <Row className="rowIcon2Style">
                    <i className="fa fa-times-circle closedStyle"></i>
                    <p className="textIconStyle">Tema tancat</p>
                </Row>
            );
        }
        else{
            return(
                <Row className="rowIcon2Style">
                    <i className="fa fa-check-circle openedStyle"></i>
                    <p className="textIconStyle">Tema obert</p>
                </Row>
            );
        }
    }

    render(){
        return(
            <div>
                <Base/>
                <div className="view2Style">
                    {this.pintarHeader()}

                    <Row className="rowIcon2Style">
                        <p className="textIconStyle">Creat el {this.props.forumtheme.createdDate}</p>
                    </Row>
                    {this.pintarEstat()}
                    <Row className="rowIcon2Style">
                        <i className="fa fa-comment iconStyle"></i>
                        <p className="textIconStyle">Descripcio: {this.props.forumtheme.description}</p>
                    </Row>
                    <hr></hr>
                    <h5 className="title2ScreenStyle">Comentaris ({this.props.comments.length})</h5>
                    <div>
                        <Textarea className="textAreaStyle" />
                        <Button style={{marginLeft:"1%"}} color="success">Comentar</Button>{' '}
                    </div>
                    {this.pintarComments()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        forumtheme: state.viewforumReducer.forumtheme,
        comments: state.viewforumReducer.comments
    }
};
const  mapDispatchToProps = (dispatch)=>{
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(viewForumTheme);
