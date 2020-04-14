import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Button, Card, Col, Row} from "react-bootstrap";
import {handleAddQuestionAnswer} from "../actions/actions-questions";

//TODO: create view for voting/answering on a question
class AnsweringAQuestionView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: '',
            showSubmit: false
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
        }, () => {
            console.log("option selected: ", this.state);
        })
    }

    handleAnswerSubmit = (e) => {
        e.preventDefault();

        const { selectedOption } = this.state;
        const { dispatch, id } = this.props;

        dispatch(handleAddQuestionAnswer(id, selectedOption));
    }

    handleCancel = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    }

    render() {
        const { question, author } = this.props;

        return (
            <Card className={"answering"}>
                <Card.Body>
                    <Card.Title>
                        <div className="userInfo-wrapper">
                            <img alt={`${author.name} profile image`} className="avatar" src={author.avatarURL} />
                            <div className="author-meta">
                                <p className="author-name">{author.name}</p>
                                <span className="date">posted on: {new Date(question.timestamp).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </Card.Title>

                    <div className="question-text">
                        <p className="h5 text-center">{author.name} asks, would you rather:</p>
                    </div>

                    {/*<p>stats shown after voting</p>*/}
                </Card.Body>
                <Card.Footer>
                    <div className="answer-wrapper">
                        <Row>
                            <Col xs={12} md={6}>
                                <div className="choice choice-one">
                                    <Button className={this.state.selectedOption === "optionOne" ? "option-button active" : "option-button"}
                                            id="optionOne"
                                            onClick={this.handleOptionChoice}>
                                        {question.optionOne.text}
                                    </Button>
                                </div>
                            </Col>

                            <Col xs={12} md={6}>
                                <div className="choice choice-two">
                                    <Button className={this.state.selectedOption === "optionTwo" ? "option-button active" : "option-button"}
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
                </Card.Footer>
                <Card.Footer className={"submit-row"}>
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
                                variant={"info"}
                                enabled={`${this.state.showSubmit}`}
                                onClick={this.handleCancel}
                            >Cancel</Button>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        );
    }
}

function mapStateToProps ({ authedUser, users, questions }, { id }) {
    const question = questions[id];
    const author = question ? users[question.author] : '';
    const authedUserDetails = users[authedUser];

    return {
        authedUserDetails,
        question,
        author
    }
}

export default withRouter(connect(mapStateToProps)(AnsweringAQuestionView));