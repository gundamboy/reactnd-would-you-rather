import React, {Component} from 'react';
import {Col, Container, Row, Tabs, Tab} from "react-bootstrap"
import {connect} from "react-redux";
import SingleQuestion from "./SingleQuestion";

class Dashboard extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Tabs defaultActiveKey="unanswered" id="questions-tabs">
                            <Tab eventKey="unanswered" title="Unanswered Questions">
                                <ul className="dashboard-list list-unstyled">
                                    {this.props.unansweredQuestionIds.map(id => (
                                        <li key={id}>
                                            <SingleQuestion id={id}/>
                                        </li>
                                    ))}
                                </ul>
                            </Tab>
                            <Tab eventKey="answered" title="Answered Questions">
                                <ul className="dashboard-list list-unstyled">
                                    {this.props.answeredQuestionIds.map(id => (
                                        <li key={id}>
                                            <SingleQuestion id={id} answered/>
                                        </li>
                                    ))}
                                </ul>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        );
    }
}

function mapStateToProps ({ questions, authedUser, users }) {
    const answeredQuestionIds = Object.keys(users[authedUser].answers)
        .sort((a,b)=>questions[b].timestamp-questions[a].timestamp);

    const unansweredQuestionIds = Object.keys(questions)
        .filter(q => !answeredQuestionIds.includes(q))
        .sort((a,b)=>questions[b].timestamp-questions[a].timestamp);

    return {
        answeredQuestionIds,
        unansweredQuestionIds
    }
}

export default connect(mapStateToProps)(Dashboard);