import React, { useState } from 'react'
import { Form, FormGroup, Col, Input, Button, Container } from 'reactstrap'
import { BsFillPersonFill } from "react-icons/bs"
import { GrMail } from "react-icons/gr"
import { AiTwotonePhone } from "react-icons/ai"
import { RiMessage3Fill } from "react-icons/ri"
import "../../css/contact.css"

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [content, setContent] = useState("")

    const formSubmit = async event => {
        event.preventDefault()
        const response = await fetch('http://localhost:4000/contact_form/entries', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({name, email, phoneNumber, content})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
        } else {
            alert(`Congrats! Submission submitted with id: ${payload.id}`)
        }
    }

    return (
        <Container>
            {/* <Card className="text-white bg-secondary my-5 py-4 text-center">
                <CardBody>
                    <CardText className="text-white m-0">Use form to reach me, I'll get back to you within 24 hours!</CardText>
                </CardBody>
            </Card> */}

            <main className="contact-container">

                <h2 className="contactTitle-container">
                    <div className="contactTitle-texts">Reachable Here!</div>
                </h2>                
           
                
                <section className="contactForm-container">
                    <Form className="my-5" onSubmit={formSubmit}>
                    
                        <FormGroup row>
                            <Col xs={2} sm={2} md={2} lg={1}>                    
                                <div className="inputNameIcon-container"> 
                                        <BsFillPersonFill />         
                                </div>                          
                            </Col>
                            <Col xs={10} sm={10} md={10} lg={11}>
                                <div className="inputName-containier">
                                    <Input 
                                        type="name" 
                                        name="name" 
                                        id="nameEntry" 
                                        placeholder="Enter full name" 
                                        required value={name} 
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>    
                            </Col>
                        </FormGroup>  

                        <FormGroup row>
                            <Col xs={2} sm={2} md={2} lg={1}>                    
                                <div className="inputEmailIcon-container"> 
                                        <GrMail />         
                                </div>                          
                            </Col>
                            <Col xs={10} sm={10} md={10} lg={11}>
                                <div className="inputEmail-containier">
                                    <Input 
                                        type="email" 
                                        name="email" 
                                        id="emailEntry" p
                                        placeholder="Enter email"  
                                        required value={email} 
                                        onChange={e => setEmail(e.target.value) }
                                    />
                                </div>    
                            </Col>
                         </FormGroup>                         

                        <FormGroup row>
                            <Col xs={2} sm={2} md={2} lg={1}>                    
                                <div className="inputPhoneIcon-container"> 
                                        <AiTwotonePhone />         
                                </div>                          
                            </Col>
                            <Col xs={10} sm={10} md={10} lg={11}>
                                <div className="inputPhone-containier">
                                    <Input 
                                        type="phone" 
                                        name="phone" i
                                        id="phoneEntry" 
                                        placeholder="Enter phone number" 
                                        required value={phoneNumber} 
                                        onChange={e => setPhoneNumber(e.target.value)}
                                    />
                                </div>    
                            </Col>
                         </FormGroup>                          

                        <FormGroup row>
                            <Col xs={2} sm={2} md={2} lg={1}>                    
                                <div className="inputMessageIcon-container"> 
                                        <RiMessage3Fill />         
                                </div>                          
                            </Col>
                            <Col xs={10} sm={10} md={10} lg={11}>
                                <div className="inputMessage-containier">
                                <Input 
                                    type="textarea" 
                                    name="text" 
                                    id="messageEntry" 
                                    required value={content} 
                                    placeholder="Enter your message"                                     
                                    onChange={e => setContent(e.target.value)}
                                />
                                </div>    
                            </Col>
                         </FormGroup>                          


                        <FormGroup>
                            <Col>
                                <div id="contact-sendButton-container">
                                    <Button id="contact-sendButton" color="secondary" size="sm">Submit</Button>
                                 </div>
                            </Col>
                        </FormGroup>
                    </Form>                        
                </section>    

            </main>    
        </Container>
      )
    }

    export default Contact