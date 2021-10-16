import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table } from 'reactstrap'
import { useHistory } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri"
import parseJwt from '../../helpers/authHelper'
import "../../css/messagecentre.css"


const MessageCentre = () => {

    let history = useHistory();
    const token = sessionStorage.getItem('token')
    const user = parseJwt(token).email
    const [listing, setListing] = useState([])

    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        history.push("/login")
    }
    
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:4000/api/contact_form/entries', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            setListing(data)
        }
        getData()
    }, [token])

    return (
        <Container>
            <main className="submission-main-container">
                <Row>
                    <header className="listing-header">
                        <Col >
                            <div className="listingTitle-container">   
                                <h1 className="listingTitle-texts">Messages received for {user}</h1>
                            </div>
                         </Col>   
                         <Col>
                            <div className="listing-logoutIcon-container">
                                <RiLogoutBoxRLine id="listing-logout" onClick={logout} />
                            </div>      
                         </Col>                       
                     </header>
                </Row>
                <Row>
                    <section className="submission-listing-container">
                        <Table hover bordered responsive size="sm" >
                            <thead>
                                <tr>
                                    <th className="column-id">ID</th>
                                    <th className="column-name">Name</th>
                                    <th className="column-email">Email</th>                                
                                    <th className="column-phone">Phone Number</th>
                                    <th className="column-message">Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listing.length === 0 &&
                                    <tr><td colSpan="4" className="text-center"><i>No listings found</i></td></tr>
                                }
                                {listing.length > 0 &&
                                    listing.map(entry => 
                                        <tr key={entry.id}>
                                            <td>{entry.id}</td>
                                            <td>{entry.name}</td>
                                            <td>{entry.email}</td>
                                            <td>{entry.phoneNumber}</td>
                                            <td>{entry.content}</td>
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

export default MessageCentre