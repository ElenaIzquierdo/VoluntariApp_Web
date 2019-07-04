import React from "react";
import Base from "./base";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Row,
    Col,
    Button,
} from 'reactstrap';

const items = [
    {
        id: 1,
        altText: 'Crea activitats!',
        caption: 'Clica la opció Esdeveniments del menú superior'
    },
    {
        id: 2,
        altText: 'Controla assistencia!',
        caption: 'Clica la opció Esdeveniments del menú superior'
    },
    {
        id: 3,
        altText: 'Visualitza el Forum dels voluntaris!',
        caption: 'Clica la opció Forum del menú superior'
    }
];

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }
    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }
    render(){
        const { activeIndex } = this.state;
        const slides = items.map((item) => {
            return (
                <CarouselItem
                    className="custom-tag"
                    tag="div"
                    key={item.id}
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                >
                    <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
                </CarouselItem>
            );
        });
        return(
            <div>
                <Base/>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}>
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
                <div className="viewStyle">
                    <div className="cardsRow">
                        <Row>
                            <Col sm="6">
                                <div className="cardStyle">
                                    <h4 style={{textAlign:"center"}}>Propera activitat</h4>
                                    <hr></hr>
                                    <i className="fa fa-eye"></i>
                                    <p>Dilluns 16 de maig</p>
                                    <p>Assistents 3/4</p>
                                    <p>Grup Petits</p>
                                    <hr></hr>
                                    <div className="footerStyle">
                                        <Button color="link">Veure més</Button>
                                    </div>
                                </div>
                            </Col>

                            <Col sm="6">
                                <div className="cardStyle">
                                    <h4 style={{textAlign:"center"}}>Propera activitat</h4>
                                    <hr></hr>
                                    <p>Dilluns 16 de maig</p>
                                    <p>Assistents 3/4</p>
                                    <p>Grup Petits</p>
                                    <hr></hr>
                                    <div className="footerStyle">
                                        <Button color="link">Veure més</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
