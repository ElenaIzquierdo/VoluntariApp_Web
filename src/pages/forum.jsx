import React from "react";
import Base from "../components/base";
import '../css/forumScreenStyle.css'
import { Row, Button } from 'reactstrap';

import ForumTheme from '../components/ForumTheme';
import connect from "react-redux/es/connect/connect";
import {changeDropDown} from "../actions/forumActions";

class Forum extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.props.changeDropDown();
    }
    pintarTemes(){
        return this.props.forumthemes.map((tema)=>{
                return(
                    <ForumTheme key={tema.id} title={tema.title} description={tema.description}
                                createdDate={tema.createdDate} finished={tema.finished}/>
                );
            }
        );

    }
    render(){
        return(
            <div>
                <Base/>
                <div className="viewStyle">
                    <h4 className="titleScreenStyle"> Forum VoluntariApp</h4>
                    <Row className="rowBotons">
                        <p className="filtresStyle">Filtrar per:</p>
                        <Button outline color="warning" className="buttonStyle">Temes Tancats</Button>
                        <Button outline color="warning" className="buttonStyle">Temes Oberts</Button>

                        <p className="filtresStyle">Ordenar per:</p>
                        <Button outline color="warning" className="buttonStyle">Títol</Button>
                        <Button outline color="warning" className="buttonStyle">Data de creació</Button>
                    </Row>
                    {this.pintarTemes()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        forumthemes: state.forumReducer.forumthemes,
        dropdownOpen: state.forumReducer.dropdownOpen
    }
};
const  mapDispatchToProps = (dispatch)=>{
    return {
        changeDropDown:()=>dispatch(changeDropDown()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Forum);
