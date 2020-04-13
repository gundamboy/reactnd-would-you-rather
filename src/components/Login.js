import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from "../actions/actions-authedUser";
import {Container, Col, Row, Form, FormGroup, FormLabel, FormControl, Button} from "react-bootstrap";
import SingleQuestion from "./SingleQuestion";

//TODO: create login component
class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectedUser = this.handleSelectedUser.bind(this);
    }

    handleSelectedUser = (v) => {
        this.setState({
            user: v.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { dispatch } = this.props;
        dispatch(setAuthedUser(this.state.user));
    }

    render() {
        const { users } = this.props;

        return (
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <FormGroup>
                                <FormLabel>Select A user from the list</FormLabel>
                                <FormControl as={"select"}
                                             value={this.state.user}
                                             name={"selected-user"}
                                             id={"user"}
                                             onChange={this.handleSelectedUser}>
                                    <option></option>
                                    {users &&
                                    Object.keys(users).map(user => (
                                        <option key={user} value={user}>{users[user].name}</option>
                                    ))
                                    }
                                </FormControl>
                            </FormGroup>
                            <Button
                                id={"submit"}
                                type={"submit"}
                                variant={"primary"}
                                disabled={!this.state.user}
                                onClick={this.handleSubmit}>Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}

function mapStateToProps ({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Login);