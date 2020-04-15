import React, {Component} from 'react';
import {Nav, Navbar, NavLink} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {connect} from "react-redux";
import {setAuthedUser} from "../actions/actions-authedUser";
import {Link, withRouter} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout = (e) => {
        e.preventDefault();

        const { dispatch } = this.props;
        dispatch(setAuthedUser(null));
    }

    render() {
        const { loggedIn, username, avatar, characterClass } = this.props;
        return (
            <header>
                <Link to='/' exact="true">
                    Home
                </Link>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>
                        Logo Here
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        {loggedIn &&
                        <>
                        <Nav className="mr-auto">
                            <LinkContainer to="/" >
                                <NavLink>Dashboard</NavLink>
                            </LinkContainer>
                            <LinkContainer to="/add">
                                <NavLink>New Question</NavLink>
                            </LinkContainer>
                            <LinkContainer to="/leaderboard">
                                <NavLink>Leaderboard</NavLink>
                            </LinkContainer>
                        </Nav>
                        <Navbar.Text>
                            <div className="profileIdent">
                                <img src={avatar} alt=""/>
                                <div className="userInfo">
                                    <h6>{username}</h6>
                                    <span>{characterClass}</span>
                                </div>
                            </div>
                        </Navbar.Text>
                        <Navbar.Text>
                            <div className="logout">
                                <LinkContainer to="/" onClick={this.handleLogout}>
                                    <NavLink>Logout</NavLink>
                                </LinkContainer>
                            </div>
                        </Navbar.Text>
                        </>
                        }
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}

export default withRouter(connect()(Header));