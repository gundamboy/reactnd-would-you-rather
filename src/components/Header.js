import React, {Component} from 'react';
import {Nav, Navbar, NavLink} from "react-bootstrap";
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";
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
                <>
                {loggedIn &&
                <Navbar expand="lg">
                    <Navbar.Brand>
                        Would You Rather?
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <IndexLinkContainer  eventKey={1} to="/" activeClassName="active">
                                <NavLink active={false}>Dashboard</NavLink>
                            </IndexLinkContainer >
                            <LinkContainer eventKey={2} to="/add">
                                <NavLink active={false}>New Question</NavLink>
                            </LinkContainer>
                            <LinkContainer eventKey={3} to="/leaderboard">
                                <NavLink active={false}>Leaderboard</NavLink>
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


                    </Navbar.Collapse>
                </Navbar>
                }
                </>
            </header>
        );
    }
}

export default withRouter(connect()(Header));