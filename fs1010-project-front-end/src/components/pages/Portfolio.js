import React from "react"
import { Container, Row, Col, Button, CardBody, CardImg, CardSubtitle, CardTitle, CardText, CardFooter, Card } from "reactstrap"
import "../../css/portfolio.css"
import creativeResonanceLogo from "../../images/creativeResonance.jpg"
import photoGallery from "../../images/photo-gallery.png"
import todoApp from "../../images/todo-app.png"

const Portfolio = () => {
    return (
        <Container>
            <main>
                <Row id="txtQuote-container" className="my-5">
                    {/* <Col lg="7">
                        <img className="img-fluid rounded mb-4 mb-lg-0" src="http://placehold.it/900x400" alt="" />
                    </Col> */}
                    {/* <Col> */}
                        {/* <h1 className="font-weight-light">Business Name or Tagline</h1> */}
                        <div className="txtQuote">
                            "Happiness in what you do is the key to success!"
                        </div>


                        {/* <div><p>Please take a look at the sample projects I have enjoyed creating so far!</p></div> */}
                        {/* <Button color="primary">Call to Action!</Button> */}
                    {/* </Col> */}
                </Row>
                <Row id="txtTakeALook-container">
                     <div className="txtTakeAlook">
                        <p>Please take a look at the sample projects I have enjoyed creating so far...</p>
                    </div>                    
                </Row>

                {/* <Card className="text-white bg-secondary my-5 py-4 text-center"> */}
                    {/* <CardBody> */}
                        {/* <CardText><p className="text-white m-0">Please take a look at the sample projects I have enjoyed creating so far!</p></CardText> */}
                    {/* </CardBody> */}
                {/* </Card> */}



                <Row>
                    <Col md="4" className="mb-5">
                            <Card id="portfolio-card-container">
                                <div className="portfolio-cardImage-container">
                                    <CardImg id="portfolio-cardImage-creativeResonance" width="100%" src={creativeResonanceLogo} alt="Card image cap" />
                                </div>
                                <CardBody>
                                    <CardTitle id="portfolio-cardTitle" tag="h5">Creative Resonance</CardTitle>
                                    <CardSubtitle id="portfolio-cardSubTitle" ag="h6" className="mb-2 text-muted">The Music Group of FS1000</CardSubtitle>
                                    <CardText id="portfolio-cardText">This web application showcases music album photo collections from different genres. My work focuses on the creation of the admin page of the application.
                                    </CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col md="4" className="mb-5">
                            <Card id="portfolio-card-container">
                                <div className="portfolio-cardImage-container">
                                    <CardImg id="portfolio-cardImage-photoGallery" width="100%" src={photoGallery} alt="Card image cap" />
                                </div>
                                <CardBody>
                                    <CardTitle id="portfolio-cardTitle" tag="h5">Photo Gallery</CardTitle>
                                    <CardSubtitle id="portfolio-cardSubTitle" ag="h6" className="mb-2 text-muted">My Work Alone</CardSubtitle>
                                    <CardText id="portfolio-cardText">This Web Application is an independent work of mine showcasing the photo collection of the Historical Sites of City of Toronto. This comes with an overlay on hover of images as well as a custom styled zoom modal view upon clicking on a photo.
                                    </CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col md="4" className="mb-5">
                            <Card id="portfolio-card-container">
                                <div className="portfolio-cardImage-container">
                                    <CardImg id="portfolio-cardImage-todoApp" width="100%" src={todoApp} alt="Card image cap" />
                                </div>
                                <CardBody>
                                    <CardTitle id="portfolio-cardTitle" tag="h5">Todo App</CardTitle>
                                    <CardSubtitle id="portfolio-cardSubTitle" ag="h6" className="mb-2 text-muted">My Work Alone</CardSubtitle>
                                    <CardText id="portfolio-cardText">This Todo Web Application is an independent work of mine. Unlike normal Todo application, this has an interesting drag and drop effect. 
                                    </CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>

                </Row>

            </main>
        </Container>
    )
}

export default Portfolio