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
    
    const [errorMessages, setErrorMessages] = useState("")

    const formSubmit = async event => {
        event.preventDefault()

        // setErrorMessages({})
        let foundErrors = contactFields_Validation(errorMessages)
        // setErrorMessages(foundErrors)


        // Ensure front-end validations are complete before fetching happens
        // so it will not display duplicate validation error message
        if ( foundErrors.length === 0 ) {         

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
                alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
            } else {
                alert(`Your message has been submitted with id: ${payload.id}`)
            }
        } else {
            setErrorMessages( `Error: ${foundErrors.join(" / ")}` )
        }
    }

    // const contactFields_Validation = (errorMessages) => {

    //     let contactErrors = {}
     
    
    //     if (!name) {
    //         contactErrors.nameError = "Name is required!"
    //     }
    
    //     let regX = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8}(\.[a-z]{2,8})?)$/
    //     if (!email) {
    //         contactErrors.emailError = "eMail is required!"
    //     } else if (!regX.test(email)) {
    //         contactErrors.emailError = "eMail is invalid!"  
    //     }
    
    //     regX = /^\d{10}$/
    //     if (!phoneNumber) {
    //         contactErrors.phoneNumberError = "Phone Number is required!"
    //     } else if (!regX.test(phoneNumber)) {
    //         contactErrors.phoneNumberError = "Phone Number is invalid!"  
    //     }        
    
    //     if (!content) {
    //         contactErrors.contentError = "Message is required!"
    //     }
    
    //     return contactErrors
        
    // }

    const contactFields_Validation = () => {
        let userErrors = []
        if (!name) {
            userErrors.push("Name is required")
        }

        let regX = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8}(\.[a-z]{2,8})?)$/
        if (!email) {
            userErrors.push("eMail is required")
        } else if (!regX.test(email)) {
            userErrors.push("eMail is invalid")
        }

        regX = /^\d{10}$/
        if (!phoneNumber) {
            userErrors.push("Phone Number is required")
        } else if (!regX.test(phoneNumber)) {
            userErrors.push("Phone Number is invalid")
        }        

        if (!content) {
            userErrors.push("Content is required")
        }       

        return userErrors
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

                    {errorMessages && <p id="errorMessages">{ errorMessages}</p>}

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
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>   
                                {/* {errorMessages.nameError && <p className="nameError">{ errorMessages.nameError }</p>}    */}
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
                                        required value={email} 
                                        onChange={e => setEmail(e.target.value) }
                                    />
                                </div>    
                                {/* {errorMessages.emailError && <p className="nameError">{ errorMessages.emailError }</p>}                                    */}
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
                                        onChange={e => setPhoneNumber(e.target.value)}
                                    />
                                </div>    
                                {/* {errorMessages.phoneNumberError && <p className="nameError">{ errorMessages.phoneNumberError }</p>}                                    */}
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
                                    onChange={e => setContent(e.target.value)}
                                />
                                </div>    
                                {/* {errorMessages.contentError && <p className="nameError">{ errorMessages.contentError }</p>}                                    */}
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