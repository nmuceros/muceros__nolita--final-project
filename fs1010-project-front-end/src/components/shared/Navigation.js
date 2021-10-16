import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'
import { NavLink as RouteLink } from 'react-router-dom'
import Logo from "../shared/LogoBrand"
import "../../css/navigation.css"


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <Container>
            <Navbar className="mainNavigation" dark expand="md" fixed="top" color="info">
                    <NavbarBrand href="">
                        <Logo />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="nav-item">
                                <NavLink tag={RouteLink} exact to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RouteLink} to="/resume">Resume</NavLink>
                            </NavItem>                    
                            <NavItem>
                                <NavLink tag={RouteLink} to="/portfolio">Portfolio</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink tag={RouteLink} to="/contact">ContactMe</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RouteLink} to="/messagecentre">MessageCentre</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RouteLink} to="/admin">Admin</NavLink>
                            </NavItem>                        
                        </Nav>
                    </Collapse>
            </Navbar>
        </Container>
    )
}

export default Navigation