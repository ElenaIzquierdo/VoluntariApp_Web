import React from "react";
import Base from "../components/base";
import {Button, Col, Form, FormGroup, Label, Input, Row} from 'reactstrap';
import {Link} from "react-router-dom";

class CreateForumTheme extends React.Component {
    render(){
        return(
            <div>
                <Base/>
                <div className="view2Style">
                    <Form>
                    <Row form style={{marginTop:"3%"}}>
                        <Col md={10}>

                                <FormGroup row>
                                    <Label for="title" sm={2}>Títol</Label>
                                    <Col sm={10}>
                                        <Input name="title" id="title" required defaultValue={this.props.title}
                                               onChange={this.handleChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="description" sm={2}>Descripció</Label>
                                    <Col sm={10}>
                                        <Input type="textarea" name="description" id="description"
                                               defaultValue={this.props.description}
                                               onChange={this.handleChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="description" sm={2}>Tasques</Label>
                                    <Col sm={10}>
                                        <Input type="textarea" name="description" id="description"
                                               defaultValue={this.props.description}
                                               onChange={this.handleChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleFile" sm={2}>Attachment</Label>
                                    <Col sm={10}>
                                        <Input type="file" name="attachment" id="exampleFile" onChange={this.handleChange}/>
                                    </Col>
                                </FormGroup>

                                <FormGroup check row>
                                    <Row style={{marginLeft:"16%"}}>
                                        <Button color="link">
                                            <Link style={{ textDecoration: 'none' }} to={"/"}>Cancel·lar</Link>
                                        </Button>
                                        <Button color="success" type="submit">Crear</Button>
                                    </Row>
                                </FormGroup>

                        </Col>
                    </Row>
                    </Form>
                </div>
            </div>
        )
    }
}

export default CreateForumTheme;
