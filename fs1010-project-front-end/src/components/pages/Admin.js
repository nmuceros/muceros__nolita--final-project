import React, { useEffect, useState } from 'react'
import { Container, Form, FormGroup, Input, Row, Col, Table, Button } from 'reactstrap'
import { useHistory } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri"
import parseJwt from '../../helpers/authHelper'
import "../../css/admin.css"

const Admin = () => {

    let history = useHistory();
    const token = sessionStorage.getItem('token')

    const [userList, setUserList] = useState([])
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const [errorMessages, setErrorMessages] = useState("")


    const handleName = (e) => {
        setName(e.target.value)
        setErrorMessages(!errorMessages)        
    }


    const handleEmail = (e) => {
        setEmail(e.target.value)
        setErrorMessages(!errorMessages)        
    }


    const handlePassword = (e) => {
        setPassword(e.target.value)
        setErrorMessages(!errorMessages)        
    }


    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        history.push("/login")
    }
    
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:4000/api/users', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            setUserList(data)
        }

        getData()
    }, [token])


    const getData_AfterAdd = async () => {
        const response = await fetch('http://localhost:4000/api/users', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json()
        setUserList(data)
    }


    const userFormSubmit = async event => {
        event.preventDefault()
        let foundErrors = userFields_Validation()
 
        if ( foundErrors.length === 0 ) {   
            const response = await fetch('http://localhost:4000/api/users', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({name, password, email})
            })

            const payload = await response.json()
            if (response.status >= 400) {
                alert(`Oops! Error: ${payload.message} for fields: ${payload}`)
            } else {
                getData_AfterAdd()
                alert(`New user has been added with id: ${payload.id}`)
            }
        } else {
            setErrorMessages( `Validation Error: ${foundErrors.join(" / ")}` )
        }
    }


    const userFields_Validation = () => {
        let userErrors = []
        if (!name) {
            userErrors.push("Name is required")
        }

        let regX = /^[\w@-]{8,20}$/; 
        if (!password) {
            userErrors.push("Password is required")
        } else if (!regX.test(password)) {
            userErrors.push("Password is invalid! Must be atleast 8 characters.")
        }

        regX = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8}(\.[a-z]{2,8})?)$/
        if (!email) {
            userErrors.push("eMail is required")
        } else if (!regX.test(email)) {
            userErrors.push("eMail is invalid! Must be correct email format sample@email.ca.")
        }
        return userErrors
    }

    return (
        <Container>
            <main className="admin-main-container">
                <Row>
                    <header className="admin-header">
                        <Col >
                            <div className="adminTitle-container">   
                                <h1 className="adminTitle-texts">User Administration</h1>
                            </div>
                         </Col>   
                         <Col>
                            <div className="admin-logoutIcon-container">
                                <RiLogoutBoxRLine id="admin-logout" onClick={logout} />
                            </div>      
                         </Col>                       
                     </header>
                </Row>
 
                <Row>
                    <section className="addUser-container">
                        <Form onSubmit={userFormSubmit} noValidate>
                            <FormGroup row>
                                <Col xs={4} sm={3} md={3} lg={3}>
                                    <div className="inputUserName-containier">
                                        <Input 
                                            type="name" 
                                            name="name" 
                                            id="nameEntry" 
                                            placeholder="Enter full name" 
                                            required value={name} 
                                            onChange={handleName}
                                        />
                                    </div>   
                                </Col>
                                <Col xs={4} sm={3} md={3} lg={3}>
                                    <div className="inputPassword-containier">
                                        <Input 
                                            type="password" 
                                            name="password" 
                                            id="passwordEntry" 
                                            placeholder="Enter password" 
                                            required value={password} 
                                            onChange={handlePassword}
                                        />
                                    </div>   
                                </Col>        
                                <Col xs={4} sm={3} md={4} lg={4}>
                                    <div className="inputEmail-containier">
                                        <Input 
                                            type="email" 
                                            name="email" 
                                            id="emailEntry" 
                                            placeholder="Enter email" 
                                            required value={email} 
                                            onChange={handleEmail}
                                        />
                                    </div>   
                                </Col>                                                   

                                <Col xs={4} sm={3} md={2} lg={2}>                    
                                    <Button 
                                            id="addUser-button" 
                                            color="secondary" 
                                            size="sm"
                                        >
                                            Add User
                                    </Button>
                                </Col>
                          
                            </FormGroup>  
                        </Form>

                        {errorMessages && <p id="errorMessages">{ errorMessages}</p>}

                    </section>
                </Row>

                <Row>
                    <section className="admin-listing-container">
                        <Table hover bordered responsive size="sm" >
                            <thead>
                                <tr>
                                    <th className="column-id">ID</th>
                                    <th className="column-name">Name</th>                             
                                    <th className="column-email">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userList.length === 0 &&
                                    <tr><td colSpan="4" className="text-center"><i>No listings found</i></td></tr>
                                }
                                {userList.length > 0 &&
                                    userList.map(entry => 
                                        <tr key={entry.id}>
                                            <td>{entry.id}</td>
                                            <td>{entry.name}</td>
                                            <td>{entry.email}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </section>    
                </Row>                     
            </main>                    
        </Container>
    )
}

export default Admin