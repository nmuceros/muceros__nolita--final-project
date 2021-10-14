import React, { useState, useEffect, useRef } from 'react'
import { Container, Col, Button, Form, FormGroup, Label, Input, Card, CardBody, CardText } from 'reactstrap'
import { useHistory, useLocation } from 'react-router-dom'
import { BsFillPersonFill } from "react-icons/bs"
import { RiLockPasswordFill } from "react-icons/ri"
import "../../css/login.css"

const Login = () => {
    const history = useHistory();
    const inputRef = useRef(null);
    let location = useLocation();
    const [auth, setAuth] = useState(true)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [foundError, setFoundError] = useState()


    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailError(!emailError)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        setPasswordError(!passwordError)
    }


    const loginSubmit = async event => {        
        event.preventDefault()

        loginFields_Validation()

        const response = await fetch('http://localhost:4000/api/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({email, password})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            setAuth(false)
        } else {
            sessionStorage.setItem('token', payload.token)
            let { from } = location.state || { from: { pathname: "/" } };
            // history.replace(from);
            history.push(from);
        }
    }

    const loginFields_Validation = () => {
        let errorCounter = 0
 
        let regX = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8}(\.[a-z]{2,8})?)$/
        if (!email) {
            setEmailError("eMail is required!")
            errorCounter += errorCounter     
        } else if (!regX.test(email)) {
            setEmailError("eMail is invalid! Must be correct email format sample@email.ca.") 
            errorCounter += errorCounter
        }

        regX = /^[\w@-]{8,20}$/; 
        if (!password) {
            setPasswordError("Password is required!")
            errorCounter += errorCounter
        } else if (!regX.test(password)) {
            setPasswordError("Password is invalid! Must be atleast 8 characters.")
            errorCounter += errorCounter
        }        
        if (errorCounter > 0) {
            setFoundError(true)
        } else {
            setFoundError(false)
        }
      
    }

    return (
        <Container>
          <main className="login-container">

            <header>
                <h2 className="loginTitle-container">
                    <div className="loginTitle-texts">For Authorized User Only!</div>
                </h2>    
                { !auth && <p className="loginErrorMessage">Invalid credentials, please try again!</p>}                            
            </header>

             <section className="loginForm-container">            
                <Form className="my-5" onSubmit={loginSubmit} noValidate >

                    <FormGroup row>
                        <Col xs={3} sm={2} md={2} lg={1}>     
                            <div className="userIDIcon-main-containier">               
                                <div className="userIDIcon-container"> 
                                        <BsFillPersonFill />         
                                </div>  
                            </div>            
                        </Col>
                        <Col xs={9} sm={10} md={10} lg={11}>
                            <div className="inputUserID-containier">
                                <Input 
                                    type="text" 
                                    name="username" 
                                    id="usernameEntry" 
                                    placeholder="Username" 
                                    required value={email} 
                                    autoComplete="off"
                                    ref={inputRef}
                                    // onChange={e => setUsername(e.target.value)}
                                    onChange={handleEmail}
                                />
                            </div>  
                            <div className="loginErrorDisplay" 
                                    style={{ visibility: !emailError ? "hidden" : "visible" }}
                                >
                                    {emailError}
                            </div>                               
                        </Col>
                    </FormGroup>  

                    <FormGroup row>
                        <Col xs={3} sm={2} md={2} lg={1}>                    
                            <div className="userNameIcon-container"> 
                                    <RiLockPasswordFill />         
                            </div>                          
                        </Col>
                        <Col xs={9} sm={10} md={10} lg={11}>
                            <div className="inputUserName-container">
                                <Input 
                                    type="password" 
                                    name="password" 
                                    id="passwordEntry" 
                                    placeholder="Valid password" 
                                    required value={password} 
                                    autoComplete="off"
                                    // onChange={e => setPassword(e.target.value)}
                                    onChange={handlePassword}
                                />
                            </div>   
                            <div className="loginErrorDisplay" 
                                    style={{ visibility: !passwordError ? "hidden" : "visible" }}
                                >
                                    {passwordError}
                            </div>                              
                        </Col>
                    </FormGroup>  

                      <FormGroup>
                          <Col>
                              <div id="login-sendButton-container">
                                  <Button id="login-signInButton" color="secondary" size="sm">Sign In</Button>
                              </div>
                          </Col>
                      </FormGroup>

                </Form>
              </section>  
          </main>
        </Container>
    )
}

export default Login