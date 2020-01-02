import React from "react";
import Base from "../components/base";
import '../css/forumScreenStyle.css';
import { Row, Button, Input, Col } from 'reactstrap';

import ForumTheme from '../components/ForumTheme';
import connect from "react-redux/es/connect/connect";
import {changeDropDown, fetchClosedForumTopics, fetchOpenedForumTopics, changeFilterProperty} from "../actions/forumActions";
import {Link} from "react-router-dom";

class Forum extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    componentWillMount(){
        this.props.fetchClosedForumTopics("-created_date");
        this.props.fetchOpenedForumTopics("-created_date");
    }

    toggle() {
        this.props.changeDropDown();
    }

    renderClosedTopics(){
        if(this.props.filters["closed"]){
            return this.props.closed_topics.map((tema)=>{
                    return(
                        <ForumTheme key={tema.id} title={tema.title} description={tema.description}
                                    createdDate={tema.created_date} finished={tema.finished} id={tema.id}/>
                    );
                }
            );
        }

    }

    renderOpenedTopics(){
        if(this.props.filters["opened"]){
            return this.props.opened_topics.map((tema)=>{
                    return(
                        <ForumTheme key={tema.id} title={tema.title} description={tema.description}
                                    createdDate={tema.createdDate} finished={tema.finished} id={tema.id}/>
                    );
                }
            );
        }

    }

    changeFiltersAndFetchFilteredTopics(propertyName){
        this.props.changeFilterProperty(propertyName);
        if(propertyName === "order_by_name"){
            this.props.fetchClosedForumTopics("title");
            this.props.fetchOpenedForumTopics("title");
        } 
        else{
            this.props.fetchOpenedForumTopics("-created_date");
            this.props.fetchClosedForumTopics("-created_date");
        } 
    }

    render(){
        return(
            <div>
                <Base/>
                <div className="viewStyle">
                    <Row className="rowBotons">
                        <Col sm="1">
                            <p className="filtresStyle text-style">Filtrar per:</p>
                            <p className="filtresStyle text-style">Ordenar per:</p>
                        </Col>
                        <Col sm="2">
                            <Row>
                                <Input addon type="checkbox" className="checkBoxButton" checked={this.props.filters["opened"]}
                                        onChange={()=>this.props.changeFilterProperty("opened")}/>
                                <p className="text-style">Temes oberts</p>
                            </Row>
                            <Row>
                                <Input addon type="checkbox" className="checkBoxButton" checked={this.props.filters["order_by_date"]}
                                        onChange={this.changeFiltersAndFetchFilteredTopics.bind(this,"order_by_date")}/>
                                <p className="text-style">Data</p>
                            </Row>
                        </Col>
                        <Col sm="1">
                            <Row>
                                <Input addon type="checkbox" className="checkBoxButton" checked={this.props.filters["closed"]}
                                        onChange={()=>this.props.changeFilterProperty("closed")}/>
                                <p className="text-style">Temes tancats</p>
                            </Row>
                            <Row>
                                <Input addon type="checkbox" className="checkBoxButton" checked={this.props.filters["order_by_name"]}
                                        onChange={this.changeFiltersAndFetchFilteredTopics.bind(this,"order_by_name")}/>
                                <p className="text-style">Títol</p>
                            </Row>
                        </Col>
                        <Col>
                            <Link className="buttonCreateStyle" style={{textDecoration: 'none'}} to='/createForumTheme'>
                                <div className="buttonCreateStyle">  
                                    <p className="text-white">Nou Tema</p> 
                                </div>
                            </Link>
                        </Col>
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
        changeFilterProperty: (propertyName) => dispatch(changeFilterProperty(propertyName)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Forum);
