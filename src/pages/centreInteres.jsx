import React from "react";
import Base from "../components/base";
import '../css/tutoriesScreenStyle.css';
import '../css/centreInteresStyle.css';
import connect from "react-redux/es/connect/connect";
import {fetchExplicacions, fetchObjectius} from "../actions/centreInteresActions";
import {Table, Row} from "reactstrap";
import Objectius from "../components/Objectius";
import Explicacions from "../components/Explicacions";

class CentreInteres extends React.Component{
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
        return(
            <div>
                <Base/>
                <h4 className="titleCentreInteres"> {this.props.centreInteres.name}</h4>
                <Row>
                    <Objectius objectius={this.props.objectius}/>
                    <Explicacions explicacions={this.props.explicacions}/>
                </Row>
            </div>
        )
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
        fetchObjectius: (centreInteres_id) => dispatch(fetchObjectius(centreInteres_id))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CentreInteres)
