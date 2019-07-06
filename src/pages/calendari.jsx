import React from "react";
import Base from "./base";
import '../css/calendariScreenStyle.css'

class Calendari extends React.Component{
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

export default Calendari;
