import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

//TODO: create view for voting/answering on a question
class SingleQuestion extends Component {
    componentDidMount() {

    }

    render() {


        console.log("question component props: ", this.props)

        return (
            <div>

            </div>
        );
    }
}

function mapStateToProps ({ authedUser, users, questions }, { id }) {
    const question = questions;
    const author = question ? users[question.author] : '';
    const authedUserDetails = users[authedUser];

    return {
        authedUserDetails,
        question,
        author
    }
}

export default withRouter(connect(mapStateToProps)(SingleQuestion));