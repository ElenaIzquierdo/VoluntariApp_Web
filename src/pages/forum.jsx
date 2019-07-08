import React from "react";
import Base from "../components/base";
import '../css/forumScreenStyle.css'

import ForumTheme from '../components/ForumTheme';
import connect from "react-redux/es/connect/connect";
import {} from "../actions/forumActions";

class Forum extends React.Component{
    pintarTemes(){
        return this.props.forumthemes.map((tema)=>{
                return(
                    <ForumTheme key={tema.id} title={tema.title} description={tema.description} createdDate={tema.createdDate}/>
                );
            }
        );

    }
    render(){
        return(
            <div>
                <Base/>
                <div className="viewStyle">
                    <h4 className="titleStyle"> Forum VoluntariApp</h4>
                    {this.pintarTemes()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        forumthemes: state.forumReducer.forumthemes,
    }
};
const  mapDispatchToProps = (dispatch)=>{
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Forum);
