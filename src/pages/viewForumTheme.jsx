import React from "react";
import Base from "../components/base";
import connect from "react-redux/es/connect/connect";
import {} from "../actions/viewforumthemeActions";
import {Row} from "reactstrap";
import Comment from "../components/Comment";

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
    render(){
        return(
            <div>
                <Base/>
                <div className="viewStyle">
                    <h4>{this.props.forumtheme.title}</h4>
                    <Row className="rowIcon2Style">
                        <i className="fa fa-calendar iconStyle"></i>
                        <p className="textIconStyle">Creat el dia {this.props.forumtheme.createdDate}</p>
                    </Row>
                    <Row className="rowIcon2Style">
                        <i className="fa fa-comment iconStyle"></i>
                        <p className="textIconStyle">Descripcio: {this.props.forumtheme.description}</p>
                    </Row>
                    <h5>Comments</h5>
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
