import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Button, Card, Col, Row} from "react-bootstrap";
import {handleAddQuestionAnswer} from "../actions/actions-questions";
import PageNotFound from "./PageNotFound";

//TODO: create view for voting/answering on a question
class SingleQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: '',
            showSubmit: false,
            showResults: false
        }

        this.handleOptionChoice = this.handleOptionChoice.bind(this);
        this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleOptionChoice = (e) => {
        e.preventDefault();

        this.setState({
            ...this.state,
            selectedOption: e.target.id,
            showSubmit: true
        })
    }

    handleAnswerSubmit = (e) => {
        e.preventDefault();

        const { selectedOption } = this.state;
        const { dispatch, id } = this.props;

        dispatch(handleAddQuestionAnswer(id, selectedOption)).then(() => {
            this.setState({
                ...this.state,
                showResults: true
            });
        });
    }

    handleCancel = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    }

    render() {
        const { question, author, id, answered, answerView } = this.props;

        if (!question) {
            return <PageNotFound/>
        }

        return (
            <>
                {answerView
                    ?
                    <Card className={"answering"}>
                        <Card.Body>
                            <Card.Title>
                                <div className="userInfo-wrapper">
                                    <img alt={`${author.name} profile image`} className="avatar"
                                         src={author.avatarURL}/>
                                    <div className="author-meta">
                                        <p className="author-name">{author.name}</p>
                                        <span
                                            className="date">posted on: {new Date(question.timestamp).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </Card.Title>

                            <div className="question-text">
                                <p className="h5 text-center">{author.name} asks, would you rather:</p>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className={this.state.showResults ? "answer-wrapper hide" : "answer-wrapper"}>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <div className="choice choice-one">
                                            <Button
                                                className={this.state.selectedOption === "optionOne" ? "option-button active" : "option-button"}
                                                id="optionOne"
                                                onClick={this.handleOptionChoice}>
                                                {question.optionOne.text}
                                            </Button>
                                        </div>
                                    </Col>

                                    <Col xs={12} md={6}>
                                        <div className="choice choice-two">
                                            <Button
                                                className={this.state.selectedOption === "optionTwo" ? "option-button active" : "option-button"}
                                                id="optionTwo"
                                                onClick={this.handleOptionChoice}>
                                                {question.optionTwo.text}
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="middle-circle">
                                    <div className="span-wrap">
                                        <span>OR</span>
                                    </div>
                                </div>
                            </div>
                            <div className={this.state.showResults ? "submit-row hide" : "submit-row"}>
                                <Row>
                                    <Col md={6}>
                                        <Button
                                            className={this.state.showSubmit ? "submit-answer-button" : "disabled submit-answer-button"}
                                            size="lg"
                                            block
                                            enabled={`${this.state.showSubmit}`}
                                            onClick={this.handleAnswerSubmit}
                                        >Submit Answer</Button>
                                    </Col>

                                    <Col md={6}>
                                        <Button
                                            className={"cancel-button"}
                                            size="lg"
                                            block
                                            variant={"secondary"}
                                            enabled={`${this.state.showSubmit}`}
                                            onClick={this.handleCancel}
                                        >Cancel</Button>
                                    </Col>
                                </Row>
                            </div>

                            <div className={this.state.showResults ? "results-row show" : "results-row"}>
                                <Row>
                                    <Col md={6}>
                                        <div className={this.state.selectedOption === "optionOne" ? "vote-wrapper selected-answer" : "vote-wrapper"}>
                                            <div className="question-text">
                                                <p className="h6">{question.optionOne.text}</p>
                                            </div>
                                            <div className="vote-text">
                                                <p>Votes: {question.optionOne.votes.length}</p>
                                                <p>Percentage: {((question.optionOne.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100).toFixed()}%</p>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <div className={this.state.selectedOption === "optionTwo" ? "vote-wrapper selected-answer" : "vote-wrapper"}>
                                            <div className="question-text">
                                                <p className="h6">{question.optionOne.text}</p>
                                            </div>
                                            <div className="vote-text">
                                                <p>Votes: {question.optionTwo.votes.length}</p>
                                                <p>Percentage: {((question.optionTwo.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100).toFixed()}%</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                        </Card.Footer>
                    </Card>
                    :
                    answered ?
                        <Card className={"in-list"}>
                            <Card.Body>
                                <Card.Title>
                                    <div className="userInfo-wrapper">
                                        <img alt={`${author.name} profile image`} className="avatar"
                                             src={author.avatarURL}/>
                                        <div className="author-meta">
                                            <p className="author-name">{author.name}</p>
                                            <span
                                                className="date">posted on: {new Date(question.timestamp).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                </Card.Title>
                                <p className="lead">{author.name} asks, would you rather:</p>

                                <div className={"results-row"}>
                                    <Row>
                                        <Col md={5}>
                                            <p className=""><strong>{question.optionOne.text}</strong></p>
                                            <p>Votes: {question.optionOne.votes.length}<br/>
                                                Percentage: {((question.optionOne.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100).toFixed()}%
                                            </p>
                                        </Col>

                                        <Col md={2}>
                                            <p>OR</p>
                                        </Col>

                                        <Col md={5}>
                                            <p className=""><strong>{question.optionTwo.text}</strong></p>
                                            <p>Votes: {question.optionTwo.votes.length}<br/>
                                                Percentage: {((question.optionTwo.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100).toFixed()}%
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                        :
                        <Card className={"in-list"}>
                            <Card.Body>
                                <Card.Title>
                                    <div className="userInfo-wrapper">
                                        <img alt={`${author.name} profile image`} className="avatar"
                                             src={author.avatarURL}/>
                                        <div className="author-meta">
                                            <p className="author-name">{author.name}</p>
                                            <span
                                                className="date">posted on: {new Date(question.timestamp).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                </Card.Title>
                                <p>{author.name} asks, would you
                                    rather: <strong>{question.optionOne.text}</strong> or <strong>{question.optionTwo.text}?</strong>
                                </p>
                            </Card.Body>
                            <Card.Footer>
                                <Link to={`/question/${id}`} className="vote-link">Submit your vote</Link>
                            </Card.Footer>
                        </Card>
                }
            </>
        );
    }
}

function mapStateToProps ({ authedUser, users, questions }, { id }) {
    const question = questions[id];
    const author = question ? users[question.author] : '';
    const authedUserDetails = users[authedUser];

    return {
        question,
        author,
        authedUserDetails
    }
}

export default withRouter(connect(mapStateToProps)(SingleQuestion));