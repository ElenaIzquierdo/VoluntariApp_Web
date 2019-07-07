import React from "react";
import Base from "../components/base";
import '../css/forumScreenStyle.css'

import ForumTheme from '../components/ForumTheme';

class Forum extends React.Component{
    render(){
        return(
            <div>
                <Base/>
                <div className="viewStyle">
                    <h4 className="titleStyle"> Forum VoluntariApp</h4>
                    <ForumTheme title="Comisió centre interes" createdDate="05/07/2019"
                                description="La comisio del centre d'interes es per coordinar tasques i que tot surti genial!"/>
                </div>
            </div>
        )
    }
}

export default Forum;
