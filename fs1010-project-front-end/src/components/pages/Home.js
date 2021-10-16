import React from "react"
import { useHistory } from "react-router-dom"
import { Container, Row, Col, Button } from "reactstrap"
import profilePhoto from "../../images/myPic3.jpg"
import "../../css/home.css"

const Home = () => {
 
    const history = useHistory()
    const buttonHandler = () => {
        history.push("/portfolio")
    }


    return (
        <Container fluid>
            <main className="home-main-container">
                <section className="section">
                    <Row className="my-5">
                        <Col lg="6">
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
                                        <p className="texts-experts">"Experts once know the basics. They became expert because someone like you gave them a chance.</p>
                                    </div>
                                    <div className="homeQuote-container2">
                                        <p className="texts-add">I believe each has a right to an equal chance ... Try me!"</p>
                                     </div>
                                </Row> 
                            </div>    
                        </Col>
                
                        <Col lg="6">
                            <div className="rightSection-container">
                                <h1 id="homeHello-texts" className="font-weight-light">hELLO!</h1>
                                <h2 id="homeMyName-texts" className="font-weight-light">My name is  <strong className="myName">Nolita Muceros</strong></h2>
                                <h3 className="homeAspiring-texts">Aspiring Full-Stack Web Developer</h3>
                                <p className="homeCurrently-texts">Currently expanding skills in "Full-Stack Web Development"</p>
                                <Button id="findOutMore-button" color="secondary" onClick = { buttonHandler}> Portfolio </Button>
                            </div>
                        </Col>
                    </Row>
                </section>
            </main>
    </Container>
    )
}

export default Home