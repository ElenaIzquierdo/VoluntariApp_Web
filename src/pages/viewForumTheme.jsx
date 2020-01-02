import React from "react";
import Base from "../components/base";
import connect from "react-redux/es/connect/connect";
import {fetchForumTopic, fetchForumTopicComments, changeNewComment, publishNewComment, closeForumTopic} from "../actions/viewforumthemeActions";
import {Row, Button} from "reactstrap";
import Comment from "../components/Comment";
import Textarea from 'react-textarea-autosize';
import '../css/viewforumStyle.css';

class viewForumTheme extends React.Component{
    componentWillMount(){
        this.props.fetchForumTopic(this.props.match.params.forumthemeid)
        this.props.fetchForumTopicComments(this.props.match.params.forumthemeid)
    }

    pintarComments(){
        return this.props.comments.map((comment)=>{
                return(
                    <Comment key={comment.id} user={comment.user} content={comment.content}
                             created_date={comment.created_date}/>
                );
            }
        );

    }

    pintarHeader(){
        if(this.props.theme.finished){
            return(
                <Row>
                    <h4 className="title2ScreenStyle">{this.props.theme.title}</h4>
                    <Button outline color="success" className="buttonopencloseStyle" onClick={this.onopenForumTopic.bind(this)}>Obrir</Button>
                </Row>
            );
        }
        else{
            return(
                <Row>
                    <h4 className="title2ScreenStyle">{this.props.theme.title}</h4>
                    <Button outline color="danger" className="buttonopencloseStyle" onClick={this.oncloseForumTopic.bind(this)}>Tancar</Button>
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

    publishComment(){
        const commentInfo = {
            content: this.props.new_comment,
            forumtheme: this.props.match.params.forumthemeid
        };
        this.props.publishNewComment(commentInfo);
        this.props.changeNewComment("");
        this.props.fetchForumTopicComments(this.props.match.params.forumthemeid);
    }

    oncloseForumTopic(){
        const forumTopicInfo = {
            finished: true
        };
        this.props.closeForumTopic(this.props.match.params.forumthemeid, forumTopicInfo);
        this.props.fetchForumTopic(this.props.match.params.forumthemeid)
    }

    onopenForumTopic(){
        const forumTopicInfo = {
            finished: false
        };
        this.props.closeForumTopic(this.props.match.params.forumthemeid, forumTopicInfo);
        this.props.fetchForumTopic(this.props.match.params.forumthemeid)
    }

    render(){
        return(
            <div>
                <Base/>
                <div className="view2Style">
                    {this.pintarHeader()}

                    <Row className="rowIcon2Style">
                        <p className="textIconStyle">Creat el {this.props.theme.createdDate}</p>
                    </Row>
                    {this.pintarEstat()}
                    <Row className="rowIcon2Style">
                        <i className="fa fa-comment iconStyle"></i>
                        <p className="textIconStyle">Descripcio: {this.props.theme.description}</p>
                    </Row>
                    <hr></hr>
                    <h5 className="title2ScreenStyle">Comentaris ({this.props.comments.length})</h5>
                    <div>
                        <Textarea className="textAreaStyle" 
                                    value={this.props.new_comment}
                                    onChange={(event)=>this.props.changeNewComment(event.target.value)}/>
                        <Button style={{marginLeft:"1%"}} color="success" onClick={this.publishComment.bind(this)}>Comentar</Button>{' '}
                    </div>
                    {this.pintarComments()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.viewforumReducer.theme,
        comments: state.viewforumReducer.comments,
        isFetching: state.viewforumReducer.isFetching,
        new_comment: state.viewforumReducer.new_comment
    }
};
const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchForumTopic: (id) => dispatch(fetchForumTopic(id)),
        fetchForumTopicComments: (id) => dispatch(fetchForumTopicComments(id)),
        changeNewComment: (text) => dispatch(changeNewComment(text)),
        publishNewComment: (commentInfo) => dispatch(publishNewComment(commentInfo)),
        closeForumTopic: (id, forumTopicInfo) => dispatch(closeForumTopic(id, forumTopicInfo))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(viewForumTheme);
