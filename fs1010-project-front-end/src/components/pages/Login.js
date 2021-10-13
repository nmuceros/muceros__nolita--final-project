import React, { useState } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardText } from 'reactstrap'
import { useHistory, useLocation } from 'react-router-dom'
import { BsFillPersonFill } from "react-icons/bs"
import { RiLockPasswordFill } from "react-icons/ri"
// import { VscQuestion} from "react-icons/vsc"
import "../../css/login.css"

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    const [email, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(true)
    // const [errorMessage, setErrorMessage] = useState({});


    const inputField_Handler = () => {
        
    }

    const loginSubmit = async event => {
        
        event.preventDefault()
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
            // let { from } = location.state;
            history.replace(from);
        }
    }

    return (
        <Container>
          <main className="login-container">

            <header>
                <h2 className="loginTitle-container">
                    <div className="loginTitle-texts">For Authorized User Only!</div>
                </h2>    
                {!auth && <p className="loginErrorMessage">Invalid credentials, please try again!</p>}                            
            </header>

             <section className="loginForm-container">            
                <Form className="my-5" onSubmit={loginSubmit} >

                    <FormGroup row>
                        <Col xs={3} sm={2} md={2} lg={1}>     
                            <div className="userIDIcon-main-containier">               
                                <div className="userIDIcon-container"> 
                                        <BsFillPersonFill />         
                                </div>  
                                {/* <div className="userIDTooltip-container"> 
                                        <VscQuestion />         
                                </div>         */}
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
                                    onChange={e => setUsername(e.target.value)}
                                />
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
                            <div className="inputUserName-containier">
                                <Input 
                                    type="password" 
                                    name="password" 
                                    id="passwordEntry" 
                                    placeholder="Valid password" 
                                    required value={password} 
                                    autoComplete="off"
                                    onChange={e => setPassword(e.target.value)}
                                />
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