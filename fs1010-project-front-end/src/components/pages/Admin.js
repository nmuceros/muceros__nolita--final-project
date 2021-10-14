import React, { useEffect, useState } from 'react'
import { Container, Form, FormGroup, Input, Row, Col, Table, Button } from 'reactstrap'
import { useHistory } from "react-router-dom";
import { RiLogoutCircleRFill } from "react-icons/ri"
import { RiLogoutBoxRLine } from "react-icons/ri"
import { AiOutlineUserAdd } from "react-icons/ai"
import parseJwt from '../../helpers/authHelper'
import "../../css/admin.css"


const Admin = () => {

    let history = useHistory();
    const token = sessionStorage.getItem('token')

    const [userList, setUserList] = useState([])

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    
    const [errorMessages, setErrorMessages] = useState({})

    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        history.push("/login")
    }

    const getData = async () => {
        const response = await fetch('http://localhost:4000/api/users', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json()
        setUserList(data)
        // console.log(data)
    }
    
    useEffect(() => {
        getData()
    }, [token])


    const userFormSubmit = async event => {
        event.preventDefault()

        setErrorMessages({})
        let foundErrors = userFields_Validation(errorMessages)
        setErrorMessages(foundErrors)

        // Ensure front-end validations are complete before fetching happens
        if (Object.keys(foundErrors).length === 0) {        

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
                // alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
                alert(`Oops! Error: ${payload.message} for fields: ${payload}`)
            } else {
                getData()
                alert(`New user has been added with id: ${payload.id}`)
            }
        }
    }

    const userFields_Validation = (errorMessages) => {

        let userErrors = {}
     
    
        if (!name) {
            userErrors.nameError = "Name is required!"
        }

        let regX = /^[\w@-]{8,20}$/; 
        if (!password) {
            userErrors.passwordError = "Password is required!"
        } else if (!regX.test(password)) {
            userErrors.passwordError = "Password is invalid!"  
        }


        regX = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8}(\.[a-z]{2,8})?)$/
        if (!email) {
            userErrors.emailError = "eMail is required!"
        } else if (!regX.test(email)) {
            userErrors.emailError = "eMail is invalid!"  
        }


    
        return userErrors
        
    }

    return (
        <Container>
            <main className="admin-main-container">

               {/* <ListingTable columns={listHeader} data={listing} loading={false} /> */}

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

                    <Form className="my-5" onSubmit={userFormSubmit} noValidate>
                    
                        <FormGroup row>

                            <Col xs={12} sm={3} md={3} lg={3}>
                                <div className="inputUserName-containier">
                                    <Input 
                                        type="name" 
                                        name="name" 
                                        id="nameEntry" 
                                        placeholder="Enter full name" 
                                        required value={name} 
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>   
                                {errorMessages.nameError && <p className="nameError">{ errorMessages.nameError }</p>}   
                            </Col>

                            <Col xs={12} sm={3} md={3} lg={3}>
                                <div className="inputPassword-containier">
                                    <Input 
                                        type="password" 
                                        name="password" 
                                        id="passwordEntry" 
                                        placeholder="Enter password" 
                                        required value={password} 
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>   
                                {errorMessages.passwordError && <p className="passwordError">{ errorMessages.passwordError }</p>}   
                            </Col>        

                            <Col xs={12} sm={3} md={4} lg={4}>
                                <div className="inputEmail-containier">
                                    <Input 
                                        type="email" 
                                        name="email" 
                                        id="emailEntry" 
                                        placeholder="Enter email" 
                                        required value={email} 
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>   
                                {errorMessages.emailError && <p className="emailError">{ errorMessages.emailError }</p>}   
                            </Col>                                                   

                            <Col xs={12} sm={3} md={2} lg={2}>                    
                                {/* <div className="adduserIcon-container"> 
                                        <AiOutlineUserAdd />         
                                </div>                           */}
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