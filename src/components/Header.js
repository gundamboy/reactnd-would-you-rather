import React, {Component} from 'react';
import {Nav, Navbar, NavLink} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import tempProfileImage from "../assets/images/fjord.png";

class Header extends Component {
    render() {
        return (
            <header>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>
                        Logo Here
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <LinkContainer to="/dashboard" >
                                <NavLink>Dashboard</NavLink>
                            </LinkContainer>
                            <LinkContainer to="/new-question">
                                <NavLink>New Question</NavLink>
                            </LinkContainer>
                            <LinkContainer to="/leaderboard">
                                <NavLink>Leaderboard</NavLink>
                            </LinkContainer>
                        </Nav>
                        <Navbar.Text>
                            <div className="profileIdent">
                                <img src={tempProfileImage} alt=""/>
                                <div className="userInfo">
                                    <h6>User Name</h6>
                                    <span>Character Class</span>
                                </div>
                            </div>
                        </Navbar.Text>
                        <Navbar.Text>
                            <div className="logout">
                                <p>Log Out</p>
                            </div>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}

export default Header;