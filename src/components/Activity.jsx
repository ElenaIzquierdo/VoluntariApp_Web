import React from "react";
import {
    Row, Col, Button
} from 'reactstrap';
import Moment from 'react-moment';
import {Link} from "react-router-dom";
import '../css/weekStyle.css';


class Activity extends React.Component {
    renderAttenders(){
        if(this.props.activity.attenders != null){
            return this.props.activity.attenders.map((user)=>{
                return(
                    <p style={{marginLeft: '5%'}} className="text-grey-style">{user.username}</p>
                )
            })
        }
    }

    renderAttendance(){
        if(this.props.activity.rate != null){
            return(
                <div style={{marginLeft: "6%"}}>
                    <p className="text-style" style={{paddingLeft: "1%", paddingRight: "1%"}}>Assistencia: {this.props.activity.attendance}</p>
                    {this.renderAttenders()}
                </div>
            )
        }
        else{
            return(
                <div style={{marginLeft: "6%"}}>
                    <p className="text-style" style={{paddingLeft: "1%", paddingRight: "1%"}}>Assistencia esperada: {this.props.activity.attendance}</p>
                    {this.renderAttenders()}
                    
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
                    <p className="text-grey-style" style={{ marginRight: "4%"}}>Encara no s'ha avaluat aquesta tarda</p>
                </Row>
            )
        }
        else{
            return(
                <Row>
                    <div sm="3" style={{borderWidth: 4,borderRadius:3, borderColor: "#014029", paddingLeft: "8%", paddingTop:"2%"}}>
                        <Row style={{justifyContent:"space-between"}}>
                            <p className="text-grey-style">Berenar</p>
                            {this.renderIconForRate(this.props.activity.rate.snack_rate)}
                        </Row>
                        <Row style={{justifyContent:"space-between"}}>
                            <p className="text-grey-style">Activitat</p>
                            {this.renderIconForRate(this.props.activity.rate.activity_rate)}
                        </Row>
                        <Row style={{justifyContent:"space-between"}}>
                            <p className="text-grey-style">Files</p>
                            {this.renderIconForRate(this.props.activity.rate.line_rate)}
                        </Row>
                        <Row style={{justifyContent:"space-between"}}>
                            <p className="text-grey-style">Respecte</p>
                            {this.renderIconForRate(this.props.activity.rate.respect_rate)}
                        </Row>
                        <Row style={{justifyContent:"space-between"}}>
                            <p className="text-grey-style">Rotllana</p>
                            {this.renderIconForRate(this.props.activity.rate.circle_rate)}
                        </Row>
                    </div>
                    <Col style={{borderWidth: 4,borderRadius:3, marginRight: "4%", marginLeft: "4%", marginTop: "2%"}}>
                        <p className="text-grey-style">{this.props.activity.rate.comments}</p>
                    </Col>
                </Row>
            )
        }
    }

    renderButtonAvaluate(){
        if(this.props.activity.rate === null){
            return(
                <Link style={{ textDecoration: 'none' }} to={`/avaluacio/${this.props.activity.id}`}>
                    <Button style={{marginLeft: '5%'}}>Avaluar</Button>
                </Link>
            )
        }
    }

    renderFile(){
        if(this.props.activity.activity_file != null){
            const url = "http://165.22.76.147:8080/voluntariapp/event/"+this.props.activity.id+"/file"
            return(
                <a style={{paddingLeft: "1%", paddingRight: "1%"}} className="subtitle-grey-style" href={url} target="_blank">Descarregar fitxa</a>
            )
        }
        else{
            return(
                <p style={{paddingLeft: "1%", paddingRight: "1%"}} className="subtitle-grey-style">Encara no hi ha fitxa per aquesta activitat</p>
            )
        }
    }

    render(){
        return(
            <div className="activity-div">
                <Row style={{justifyContent: 'space-between', marginLeft: '1%'}}>
                    <h5 className="title-activity"> {this.props.activity.title}</h5>
                    <Link className="upload-file-button" style={{textDecoration: 'none'}}>
                        <div className="upload-file-button">  
                            <p className="text-white">Afegir fitxa</p> 
                        </div>
                    </Link>
                </Row>
                <Moment className="text-style" style={{paddingLeft: "1%"}} format="DD/MM/YYYY HH:mm">
                    {this.props.activity.start_date}
                </Moment> - <Moment className="text-style" format="DD/MM/YYYY HH:mm">{this.props.activity.end_date}</Moment>
                <p className="text-style" style={{paddingLeft: "1%", paddingRight: "1%"}}>
                    Grup {this.props.activity.group}
                </p>
                {this.renderFile()}
                
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
                        {this.renderRate()}
                    </div>
                    <div>
                        {this.renderButtonAvaluate()}
                    </div>
                </Row>
                 
            </div>
        )
    }
}
export default Activity;
