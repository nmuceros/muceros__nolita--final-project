import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { Container, Row, Col, Button } from "reactstrap"
// import profilePhoto from "../../images/myPhoto14.jpeg"
// import profilePhoto from "../../images/mypic.png"
import profilePhoto from "../../images/myPic3.jpg"
// import twitter from "../../images/twitter.svg"
// import facebook from "../../images/facebook2.svg"
// import linkedin from "../../images/linkedin.svg"
// import instagram from "../../images/instagram.svg"
import "../../css/home.css"

const Home = () => {

    // const social = [
    //     {icon: twitter, link: "https://twitter.com/cityoftoronto?lang=en"},
    //     {icon: facebook, link: "https://www.facebook.com/cityofto/"},
    //     {icon: linkedin, link: "https://ca.linkedin.com/company/city-of-toronto"},
    //     {icon: instagram, link: "https://www.instagram.com/explore/locations/212991559/toronto-ontario/?hl=en"}
    // ];    

    const history = useHistory()


        
    // const [selectedSocial, setSelectedSocial] = useState(null);    

    const buttonHandler = () => {
        history.push("/portfolio")

    }


    return (
        <Container fluid>
            <main className="home-main-container">
                <section className="section">
                    <Row className="my-5">
                        {/* <Col lg="1">
                            <div className="social-container">
                                {
                                social.map(social => 
                                    <div className="social-image-container">
                                        <a href={social.link}>
                                        <img className="img-social" src={social.icon} alt="social-image" onClick={() => setSelectedSocial(social.icon)} />
                                        </a>
                                    </div>
                                )
                                }
                            </div>


                        </Col> */}

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
                                {/* <p>Get to know me...</p> */}

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