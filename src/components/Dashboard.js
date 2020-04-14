import React, {Component} from 'react';
import {Col, Container, Row, Tabs, Tab} from "react-bootstrap"
import {connect} from "react-redux";
import SingleQuestion from "./SingleQuestion";

class Dashboard extends Component {
    componentDidMount() {

    }

    render() {
        const { question, author, authedUserDetails, id, detailed } = this.props;

        console.log('props: ', this.props);
        return (
            <Container>
                <Row>
                    <Col>
                        <Tabs defaultActiveKey="unanswered" id="questions-tabs">
                            <Tab eventKey="unanswered" title="Unanswered Questions">
                                <ul className="dashboard-list list-unstyled">
                                    {this.props.unansweredQuestionIds.map(id => (
                                        <li key={id}><SingleQuestion id={id}/></li>
                                    ))}
                                </ul>
                            </Tab>
                            <Tab eventKey="answered" title="Answered Questions">
                                <ul className="dashboard-list list-unstyled">
                                    {this.props.answeredQuestionIds.map(id => (
                                        <li key={id}></li>
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

const mapStateToProps = ({questions, authedUser, users}) => {
    // unansweredQuestions is now accessible in this.props
    // connect gives us the store. The store sees the reducer, and the reducer sees the action
    // the action is the logic, sending the data to the reducer, and the reducer sending it to the store


    const answeredQuestionIds = Object.keys(users[authedUser].answers)
        .sort((a,b)=>questions[b].timestamp-questions[a].timestamp);

    const unansweredQuestionIds = Object.keys(questions)
        .filter(q => !answeredQuestionIds.includes(q))
        .sort((a,b)=>questions[b].timestamp-questions[a].timestamp);

    return {
        answeredQuestionIds,
        unansweredQuestionIds
    }
};

export default connect(mapStateToProps)(Dashboard);