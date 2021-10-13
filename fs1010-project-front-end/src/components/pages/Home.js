import React from "react"
import { useHistory } from "react-router-dom"
import { Container, Row, Col, Button } from "reactstrap"
import "../../css/home.css"
import profilePhoto from "../../images/myPhoto14.jpeg"

const Home = () => {

    const history = useHistory()

    const buttonHandler = () => {
        history.push("/portfolio")

    }


    return (
        <Container>
            <main>
                <section className="section">
                    <Row className="my-5">
                        <Col lg="5">
                            <div className="leftSection-container">
                                 
                                <Row>
                                    <div className="aboutMe-container">                                    
                                        <div className="imageFrame">
                                            <img id="myPhoto" src={profilePhoto} alt="profilePhoto" />
                                        </div>
                                                                
                                     </div>
                                </Row> 
                                <Row>
                                    <div className="homeQuote-container1">
                                        <p className="texts-experts">"Experts once know basic. They became expert because someone like you have given them a chance.</p>
                                    </div>
                                    <div className="homeQuote-container2">
                                        <p className="texts-add">Add an expert to be... hire me!"</p>
                                        
                                    
                                     </div>
                                </Row> 
                            </div>    
                        </Col>
                
                        <Col lg="7">
                            <div className="rightSection-container">
                                <h1 id="homeHello-texts" className="font-weight-light">hELLO!</h1>
                                <h2 id="homeMyName-texts" className="font-weight-light">My name is  <strong className="myName">Nolita Muceros</strong></h2>
                                <h3 className="homeAspiring-texts">Aspiring Full-Stack Web Developer</h3>
                                <p className="homeCurrently-texts">Currently expanding skills in "Full-Stack Web Development"</p>
                                {/* <p>Get to know me...</p> */}

                                <Button id="findOutMore-button" color="secondary" onClick = { buttonHandler}> Recent projects... </Button>
                            </div>
                        </Col>
                    </Row>
                </section>
            </main>
    </Container>
    )
}

export default Home