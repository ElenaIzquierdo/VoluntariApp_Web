import React from "react";
import {
    Row, Col
} from 'reactstrap';
import Moment from 'react-moment';
import {Link} from "react-router-dom";


class Activity extends React.Component {
    renderAttendance(){
        if(this.props.activity.attendanceControl){
            return(
                <Row style={{marginLeft: "6%"}}>
                    <i className="fa fa-check"/>
                    <p style={{paddingLeft: "1%", paddingRight: "1%"}}>Assistencia: {this.props.activity.attendance}</p>
                </Row>
            )
        }
        else{
            return(
                <Row style={{marginLeft: "6%"}}>
                    <i className="fa fa-check"/>
                    <p style={{paddingLeft: "1%", paddingRight: "1%"}}>Assistencia esperada: {this.props.activity.attendance}</p>
                </Row>
            )
        }
    }
    renderIconForRate(rate){
        if(rate === 2){
            return(
                <i className="fa fa-check"/>
            )
        }
        if(rate === 1){
            return(
                <i className="fa fa-minus"/>
            )
        }
        if(rate === 0){
            return(
                <i className="fa fa-times"/>
            )
        }
    }
    renderRate(){
        if(this.props.activity.rate === null){
            return(
                <Row style={{marginLeft: "6%"}}>
                    <h6 style={{color:"#014029"}}>Avaluació</h6>
                    <p style={{ marginRight: "4%", marginLeft: "4%"}}>Encara no s'ha avaluat aquesta tarda</p>
                    <Link style={{textDecoration: 'none'}} to='/createForumTheme'>
                        <p style={{ marginRight: "4%", marginLeft: "4%", marginTop:"1%"}}>Avaluar</p>
                    </Link>
                </Row>
            )
        }
        else{
            return(
                <Row>
                    <h6 style={{marginLeft: "6%",color:"#014029"}}>Avaluació ({this.props.activity.rate.total_rate})</h6>
                    <div sm="3" style={{borderWidth: 4,borderRadius:3, borderColor: "#014029", paddingLeft: "8%", paddingTop:"2%"}}>
                        <Row style={{justifyContent:"space-between"}}>
                            <p>Berenar</p>
                            {this.renderIconForRate(this.props.activity.rate.snack_rate)}
                        </Row>
                        <Row style={{justifyContent:"space-between"}}>
                            <p>Activitat</p>
                            {this.renderIconForRate(this.props.activity.rate.activity_rate)}
                        </Row>
                        <Row style={{justifyContent:"space-between"}}>
                            <p>Files</p>
                            {this.renderIconForRate(this.props.activity.rate.line_rate)}
                        </Row>
                        <Row style={{justifyContent:"space-between"}}>
                            <p>Respecte</p>
                            {this.renderIconForRate(this.props.activity.rate.respect_rate)}
                        </Row>
                        <Row style={{justifyContent:"space-between"}}>
                            <p>Rotllana</p>
                            {this.renderIconForRate(this.props.activity.rate.circle_rate)}
                        </Row>
                    </div>
                    <Col style={{borderWidth: 4,borderRadius:3, marginRight: "4%", marginLeft: "4%", marginTop: "2%"}}>
                        <p>{this.props.activity.rate.comments}</p>
                    </Col>
                </Row>
            )
        }
    }
    render(){
        return(
            <div style={{marginBottom: "3%"}}>
                <h5 style={{marginLeft: "3%",color:"#014029"}}> {this.props.activity.title}</h5>
                <Row style={{marginLeft: "5%"}}>
                    <Col sm="3">
                        <i className="fa fa-calendar"/>
                        <Moment style={{paddingLeft: "1%", paddingRight: "1%"}} format="DD/MM/YYYY HH:mm">
                            {this.props.activity.start_date}
                        </Moment> - <Moment style={{paddingLeft: "1%"}} format="DD/MM/YYYY HH:mm">{this.props.activity.end_date}</Moment>
                    </Col>
                    <Col sm="1">
                        <Row>
                            <i className="fa fa-group"/>
                            <p style={{paddingLeft: "1%", paddingRight: "1%"}}>Grup {this.props.activity.group}</p>
                        </Row>
                    </Col>
                    <Col sm="3">
                        {this.renderAttendance()}
                    </Col>
                    <Col sm="3">
                        <Row>
                            <i className="fa fa-download"/>
                            <p style={{paddingLeft: "1%", paddingRight: "1%"}}>Descarregar fitxa</p>
                        </Row>
                    </Col>
                    
                </Row>
                
                <Row style={{marginLeft: "6%"}}>
                    <p>{this.props.activity.description}</p>
                </Row>
                
                {this.renderRate()}
                
            </div>
        )
    }
}
export default Activity;
