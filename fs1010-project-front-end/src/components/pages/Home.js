import React from "react"
import { Container, Row, Col } from "reactstrap"
import "../../css/home.css"
import myPhoto from "../../images/myPhoto14.jpeg"

const Home = () => {
    return (
        <Container>
            <main>
                <section>
                    <Row className="my-5">
                        <Col lg="5">
                            <div className="aboutMe-container">
                                <row>
                                    <div className="imageFrame">
                                        <img className="myPhoto" src={myPhoto} alt="owner's photo" />
                                    </div>
                                </row>
                            </div>
                        </Col>
                
                        <Col lg="7">
                            <h1 className="font-weight-light">hELLO!</h1>
                            <h2 className="font-weight-light">My name is <strong>Nolita Muceros</strong></h2>
                            <h3>Aspiring Full-Stack Web Developer</h3>
                            <p>Currently taking "Full-Stack Web Development" program at York University  </p>
                            <p>Please browse my site to know more about me...</p>
                        </Col>
                    </Row>
                </section>
            </main>
    </Container>
    )
}

export default Home