import React from "react";
import {
    Row, Col, Button
} from 'reactstrap';
import Moment from 'react-moment';
import {Link} from "react-router-dom";


class Activity extends React.Component {
    renderAttendance(){
        if(this.props.activity.attendanceControl){
            return(
                <div style={{marginLeft: "6%"}}>
                    <p className="text-style" style={{paddingLeft: "1%", paddingRight: "1%"}}>Assistencia: {this.props.activity.attendance}</p>
                </div>
            )
        }
        else{
            return(
                <div style={{marginLeft: "6%"}}>
                    <p className="text-style" style={{paddingLeft: "1%", paddingRight: "1%"}}>Assistencia esperada: {this.props.activity.attendance}</p>
                    <Button>Passar llista</Button>
                </div>
                    
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
            <div className="activity-div">
                <h5 className="title-activity"> {this.props.activity.title}</h5>
                <Moment className="text-style" style={{paddingLeft: "1%"}} format="DD/MM/YYYY HH:mm">
                    {this.props.activity.start_date}
                </Moment> - <Moment className="text-style" format="DD/MM/YYYY HH:mm">{this.props.activity.end_date}</Moment>
                <p className="text-style" style={{paddingLeft: "1%", paddingRight: "1%"}}>
                    Grup {this.props.activity.group}
                </p>
                
                <Row style={{marginLeft: '1%'}}>
                    <div className="column-description">
                        <p className="text-grey-style">
                            {this.props.activity.description}
                        </p>
                    </div>
                    <div className="column-description">
                        {this.renderAttendance()}
                    </div>
                    <div className="column-description">
                        <p className="text-style">Valoracio</p>
                    </div>
                </Row>
                 
            </div>
        )
    }
}
export default Activity;
