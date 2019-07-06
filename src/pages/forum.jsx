import React from "react";
import Base from "./base";
import '../css/forumScreenStyle.css'

class Forum extends React.Component{
    render(){
        return(
            <div>
                <Base/>
                <div className="viewStyle">
                </div>
            </div>
        )
    }
}

export default Forum;
