import React, {Component} from 'react';
import {Col, Container, Row, Tabs, Tab} from "react-bootstrap"
import AnsweredQuestionsList from "./AnsweredQuestionsList";
import UnansweredQuestionsList from "./UnansweredQuestionsList";

//TODO: create the main dashboard view that appears after logging in
class Dashboard extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Tabs defaultActiveKey="answered" id="questions-tabs">
                            <Tab eventKey="answered" title="Answered Questions">
                                <AnsweredQuestionsList/>
                            </Tab>
                            <Tab eventKey="unanswered" title="Unanswered Questions">
                                <UnansweredQuestionsList/>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Dashboard;