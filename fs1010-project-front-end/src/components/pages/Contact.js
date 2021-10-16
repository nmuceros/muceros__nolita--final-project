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

    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [phoneNumberError, setPhoneNumberError] = useState("")
    const [contentError, setContentError] = useState("")


    const handleName = (e) => {
        setName(e.target.value)
        setNameError(!nameError)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailError(!emailError)
    }

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
        setPhoneNumberError(!phoneNumberError)
    }

    const handleContent = (e) => {
        setContent(e.target.value)
        setContentError(!contentError)
    }


    const formSubmit = async event => {
        event.preventDefault()
        let foundErrors = contactFields_Validation()
        if ( foundErrors < 1 ) {               

            const response = await fetch('http://localhost:4000/api/contact_form/entries', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, email, phoneNumber, content})
            })

            const payload = await response.json()
            if (response.status >= 400) {
                alert(`Error Alert! ${payload.message} for fields ${payload.invalid.join(", ")}`)
            } else {
                alert(`Your message has been submitted with id: ${payload.id}`)
            }
        }
    }

    const contactFields_Validation = () => {
        let errorCounter = 0
        if (!name) {
            setNameError("Name is required!")
            errorCounter += errorCounter
        }
    
        let regX = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8}(\.[a-z]{2,8})?)$/
        if (!email) {
            setEmailError("eMail is required!")
            errorCounter += errorCounter     
        } else if (!regX.test(email)) {
            setEmailError("eMail is invalid! Must be correct email format sample@email.ca.") 
            errorCounter += errorCounter
        }
    
        regX = /^\d{10}$/
        if (!phoneNumber) {
            setPhoneNumberError("Phone Number is required!")
            errorCounter += errorCounter
        } else if (!regX.test(phoneNumber)) {
            setPhoneNumberError("Phone Number is invalid! Must be 10-digit numbers.")  
            errorCounter += errorCounter
        }        
    
        if (!content) {
            setContentError("Message is required!")
            errorCounter += errorCounter
        } 
        return errorCounter
    }


    return (
        <Container>
            <main className="contact-container">
                <h2 className="contactTitle-container">
                    <div className="contactTitle-texts">Reachable Here!</div>
                </h2>                
                <section className="contactForm-container">
                    <Form className="my-5" onSubmit={formSubmit} noValidate>
                        <FormGroup row>
                            <Col xs={2} sm={2} md={2} lg={1}>                    
                                <div className="contactNameIcon-container"> 
                                        <BsFillPersonFill />         
                                </div>                          
                            </Col>
                            <Col xs={10} sm={10} md={10} lg={11}>
                                <div className="contactName-container">
                                    <Input 
                                        type="name" 
                                        name="name" 
                                        id="contactNameEntry" 
                                        placeholder="Enter full name" 
                                        required value={name} 
                                        autoComplete="off"
                                        onChange={handleName}
                                    />
                                </div>   
                                <div className="errorDisplay" 
                                    style={{ visibility: !nameError ? "hidden" : "visible" }}
                                >
                                    {nameError}
                                </div>                              
                            </Col>
                        </FormGroup>  

                        <FormGroup row>
                            <Col xs={2} sm={2} md={2} lg={1}>                    
                                <div className="contactEmailIcon-container"> 
                                        <GrMail />         
                                </div>                          
                            </Col>
                            <Col xs={10} sm={10} md={10} lg={11}>
                                <div className="contactEmail-container">
                                    <Input 
                                        type="email" 
                                        name="email" 
                                        id="contactEmailEntry"
                                        placeholder="Enter email"  
                                        autoComplete="off"
                                        required value={email} 
                                        onChange={handleEmail}
                                    />
                                </div>    
                                <div className="errorDisplay" 
                                    style={{ visibility: !emailError ? "hidden" : "visible" }}
                                >
                                    {emailError}
                                </div> 
                            </Col>
                         </FormGroup>                         

                        <FormGroup row>
                            <Col xs={2} sm={2} md={2} lg={1}>                    
                                <div className="contactPhoneIcon-container"> 
                                        <AiTwotonePhone />         
                                </div>                          
                            </Col>
                            <Col xs={10} sm={10} md={10} lg={11}>
                                <div className="contactPhone-container">
                                    <Input 
                                        type="phone" 
                                        name="phone"
                                        id="contactPhoneEntry" 
                                        placeholder="Enter phone number" 
                                        required value={phoneNumber} 
                                        autoComplete="off"
                                        onChange={handlePhoneNumber}
                                    />
                                </div>    
                                <div className="errorDisplay" 
                                    style={{ visibility: !phoneNumberError ? "hidden" : "visible" }}
                                >
                                    {phoneNumberError}
                                </div>                               
                            </Col>
                         </FormGroup>                          

                        <FormGroup row>
                            <Col xs={2} sm={2} md={2} lg={1}>                    
                                <div className="contactMessageIcon-container"> 
                                        <RiMessage3Fill />         
                                </div>                          
                            </Col>
                            <Col xs={10} sm={10} md={10} lg={11}>
                                <div className="contactMessage-container">
                                <Input 
                                    type="textarea" 
                                    name="text" 
                                    id="contactMessageEntry" 
                                    required value={content} 
                                    placeholder="Enter your message"    
                                    autoComplete="off"                                 
                                    onChange={handleContent}
                                />
                                </div>    
                                <div className="errorDisplay" 
                                    style={{ visibility: !contentError ? "hidden" : "visible" }}
                                >
                                    {contentError}
                                </div>                              
                            </Col>
                         </FormGroup>                          

                        <FormGroup>
                            <Col>
                                <div id="contact-sendButton-container">
                                    <Button 
                                        id="contact-sendButton" 
                                        color="secondary" 
                                        size="sm"
                                    >
                                        Submit
                                    </Button>
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