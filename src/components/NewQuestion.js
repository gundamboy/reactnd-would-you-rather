import React, {Component} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {handleAddQuestion} from "../actions/actions-questions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class NewQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            optionOne: '',
            optionTwo: '',
            enableSubmit: '',
            doRedirect: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleInputChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
        }, () => {
            if (this.state.optionOne.length && this.state.optionTwo.length) {
                this.setState({
                    ...this.state,
                    enableSubmit: 'true'
                })
            } else {
                this.setState({
                    ...this.state,
                    enableSubmit: ''
                })
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { optionOne, optionTwo } = this.state;
        const { dispatch } = this.props;

        dispatch(handleAddQuestion(optionOne, optionTwo));

        this.setState(() => ({
            doRedirect: true
        }))
    }

    handleCancel = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    }

    render() {
        const { optionOne, optionTwo, enableSubmit, doRedirect } = this.state;

        if(doRedirect) {
            return <Redirect to="/"/>
        }

        return (
            <Container className="new-question">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <div className="title-wrap">
                            <h4 className="page-title">Add a new question</h4>
                        </div>
                        <Form className="new-question-form" noValidate onSubmit={this.handleSubmit}>
                            <Form.Group className="">
                                <Form.Label>Option One</Form.Label>
                                <Form.Control type="text" id={"optionOne"} value={optionOne} onChange={this.handleInputChange} placeholder="Option One"/>
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Option Two</Form.Label>
                                <Form.Control type="text" id={"optionTwo"} value={optionTwo} onChange={this.handleInputChange} placeholder="Option Two"/>
                            </Form.Group>

                            <div className="text-right">
                                <Button className="cancel-button" variant={"secondary"} onClick={this.handleCancel}>Cancel</Button>
                                <Button type={"submit"} className="submit-button" disabled={!enableSubmit}>Submit Question</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default connect()(NewQuestion);