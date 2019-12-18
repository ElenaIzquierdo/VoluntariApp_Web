import React from "react";
import Base from "../components/base";
import '../css/forumScreenStyle.css';
import { Row, Button } from 'reactstrap';

import ForumTheme from '../components/ForumTheme';
import connect from "react-redux/es/connect/connect";
import {changeDropDown, fetchClosedForumTopics, fetchOpenedForumTopics} from "../actions/forumActions";
import {Link} from "react-router-dom";

class Forum extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.props.fetchClosedForumTopics("-created_date");
        this.props.fetchOpenedForumTopics("-created_date");
        console.log("topics ", this.props.closed_topics)
    }

    toggle() {
        this.props.changeDropDown();
    }

    renderClosedTopics(){
        console.log("closed_topics ", this.props.closed_topics)
        return this.props.closed_topics.map((tema)=>{
                return(
                    <ForumTheme key={tema.id} title={tema.title} description={tema.description}
                                createdDate={tema.created_date} finished={tema.finished} id={tema.id}/>
                );
            }
        );

    }

    renderOpenedTopics(){
        return this.props.opened_topics.map((tema)=>{
                return(
                    <ForumTheme key={tema.id} title={tema.title} description={tema.description}
                                createdDate={tema.createdDate} finished={tema.finished} id={tema.id}/>
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

                        <Link className="buttonCreateStyle" style={{textDecoration: 'none'}} to='/createForumTheme'>
                            <Button color="success" >Nou Tema</Button>
                        </Link>

                    </Row>
                    {this.renderOpenedTopics()}
                    {this.renderClosedTopics()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        opened_topics: state.forumReducer.opened_topics,
        closed_topics: state.forumReducer.closed_topics,
        isFetching: state.forumReducer.isFetching,
        filters: state.forumReducer.filters,
        dropdownOpen: state.forumReducer.dropdownOpen
    }
};
const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchClosedForumTopics: (order) => dispatch(fetchClosedForumTopics(order)),
        fetchOpenedForumTopics: (order) => dispatch(fetchOpenedForumTopics(order)),
        changeDropDown:()=>dispatch(changeDropDown()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Forum);
