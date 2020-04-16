import React, {Component} from 'react';
import {Col, Container, ProgressBar, Row} from "react-bootstrap";
import {connect} from "react-redux";

//TODO: create the leader board view
class Leaderboard extends Component {

    constructor(props) {
        super(props);

    }

    sortQuestions = () => {

    }

    render() {
        console.log("leaderboard props: ", this.props);
        return (
            <Container className={"leaderboard"}>
                <Row>
                    <Col>
                        <h4>Leaderboard</h4>
                    </Col>
                </Row>
                {this.props.leaderboardData ?
                    this.props.leaderboardData.map(user => (
                        <Row key={user.id} className="progress-bar-row">
                            <Col md={4} lg={3}>
                                <div className={"user"}>
                                    <div className="avatar-wrap">
                                        <img src={user.avatarURL} className={"avatar"} alt={`${user.name}'s Profile Image`}/>
                                    </div>
                                    <p className={user.id}>{user.name} <br/>{user.characterClass}</p>
                                </div>

                            </Col>
                            <Col md={8} lg={9}>
                                <div className="progress-wrap">
                                    <span>Answered Questions:</span>
                                    <ProgressBar className={user.id} now={user.answeredQuestions}
                                                 label={`${user.answeredQuestions}`}/>
                                </div>
                                <div className="progress-wrap">
                                    <span>Asked Questions:</span>
                                    <ProgressBar className={user.id} now={user.createdQuestions}
                                                 label={`${user.createdQuestions}`}/>
                                </div>
                            </Col>
                        </Row>
                    ))
                :
                "No Data"}
            </Container>
        );
    }
}

function mapStateToProps ({ authedUser, users, questions }) {
    const leaderboardData = Object.keys(users).map(user => ({ // Create data for leaderboard
        id: user,
        name: users[user].name,
        avatarURL: users[user].avatarURL,
        characterClass: users[user].characterClass,
        answeredQuestions: Object.keys(users[user].answers).length,
        createdQuestions: Object.keys(questions).filter(q => questions[q].author === user).length
    }))
        .sort((a,b) => (b.answeredQuestions+b.createdQuestions)-(a.answeredQuestions+a.createdQuestions));

    return {
        authedUser,
        leaderboardData
    }
}

export default connect(mapStateToProps)(Leaderboard);