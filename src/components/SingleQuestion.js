import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Card} from "react-bootstrap";

//TODO: create view for voting/answering on a question
class SingleQuestion extends Component {
    componentDidMount() {

    }

    render() {
        const { question, author, authedUserDetails, id } = this.props;

        return (
            <Card className={"in-list"}>
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
                    <p>{author.name} asks, would you rather: <strong>{question.optionOne.text}</strong> or <strong>{question.optionTwo.text}?</strong>
                    </p>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/question/${id}`} className="vote-link">Submit your vote</Link>
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

export default withRouter(connect(mapStateToProps)(SingleQuestion));