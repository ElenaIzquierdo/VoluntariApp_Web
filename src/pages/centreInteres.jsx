import React from "react";
import Base from "../components/base";
import '../css/tutoriesScreenStyle.css';
import '../css/centreInteresStyle.css';
import connect from "react-redux/es/connect/connect";
import {fetchExplicacions, fetchObjectius, fetchObjectiusWithURL, fetchExplicacionsWithURL} from "../actions/centreInteresActions";
import { Row} from "reactstrap";
import Objectius from "../components/Objectius";
import Explicacions from "../components/Explicacions";
import {Redirect} from "react-router-dom";

class CentreInteres extends React.Component{
    constructor(props){
        super(props)
        this.props.fetchExplicacions(1);
        this.props.fetchObjectius(1);
    }
    renderObjectius(){
        return this.props.objectius.map((objectiu)=>{
            return(
                <tr>
                    <td>{objectiu.description}</td>
                </tr>
            )
        })
    }

    render(){
        if(localStorage.getItem('token') === null){
            return <Redirect to={`/login`}/>
        }
        else{
            return(
                <div>
                    <Base/>
                    <h4 className="titleCentreInteres"> {this.props.centreInteres.name}</h4>
                    <Row>
                        <Objectius objectius={this.props.objectius} fetchObjectiusWithURL={this.props.fetchObjectiusWithURL}/>
                        <Explicacions explicacions={this.props.explicacions} fetchExplicacionsWithURL={this.props.fetchExplicacionsWithURL}/>
                    </Row>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        objectius: state.centreInteresReducer.objectius,
        estat_actual: state.centreInteresReducer.estat_actual,
        explicacions: state.centreInteresReducer.explicacions,
        centreInteres: state.centreInteresReducer.centreInteres,
    }
};

const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchExplicacions: (centreInteres_id) => dispatch(fetchExplicacions(centreInteres_id)),
        fetchObjectius: (centreInteres_id) => dispatch(fetchObjectius(centreInteres_id)),
        fetchObjectiusWithURL: (url)=>dispatch(fetchObjectiusWithURL(url)),
        fetchExplicacionsWithURL: (url)=>dispatch(fetchExplicacionsWithURL(url))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CentreInteres)
