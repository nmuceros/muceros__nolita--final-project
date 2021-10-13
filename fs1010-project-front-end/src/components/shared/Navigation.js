import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'
import { NavLink as RouteLink } from 'react-router-dom'
import Logo from "../shared/LogoBrand"


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar className="mainNavigation" dark expand="md" fixed="top" color="info">
            <Container>
                <NavbarBrand href="">
                    <Logo />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={RouteLink} to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouteLink} to="/resume">Resume</NavLink>
                        </NavItem>                    
                        <NavItem>
                            <NavLink tag={RouteLink} to="/portfolio">Portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink tag={RouteLink} to="/contact">Contact Me</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouteLink} to="/messagecentre">Message Centre</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouteLink} to="/admin">Admin</NavLink>
                        </NavItem>                        
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation