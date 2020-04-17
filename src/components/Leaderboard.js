import React, {Component} from 'react';
import {Col, Container, ProgressBar, Row} from "react-bootstrap";
import {connect} from "react-redux";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import authedUser from "../reducers/reducer-authedUser";

//TODO: create the leader board view
class Leaderboard extends Component {

    constructor(props) {
        super(props);

    }


    mapTable = (leaderboardData) => {
        let rows = [];

        leaderboardData.forEach((user, idx) => {
            let cell = {
                "rowId": user.id,
                "rank": idx+1,
                "name": <><div className="userInfo-wrapper">
                            <img className="avatar" src={user.avatarURL} alt={`${user.name}'s Profile Image`}/>
                            <div className="author-meta">
                                <p className="author-name">{user.name}</p>
                                <p className="character-class">{user.characterClass}</p>
                            </div>
                </div></>,
                "created": user.createdQuestions,
                "answered": user.answeredQuestions
            }

            rows.push(cell);
        });

        return rows;
    }

    render() {

        let tableData = [{
            "rank": "",
            "name": "",
            "created": "",
            "answered": "",
        }];

        const columns = [
            {
                dataField: 'rank',
                text: 'Rank',
                headerClasses: 'rank-column',
                sort: true
            },
            {
                dataField: 'name',
                text: 'Name',
                headerClasses: 'name-column',
                sort: true
            },
            {
                dataField: 'created',
                text: 'Created Questions',
                headerClasses: 'created-column',
                sort: true
            },
            {
                dataField: 'answered',
                text: 'Answered Questions',
                headerClasses: 'answered-column',
                sort: true
            }
        ];

        let content = (
            <p>Sorry, there is no data for this yet.</p>
        );

        if (this.props.leaderboardData.length) {
            const { authedUser, leaderboardData} = this.props;

            tableData = this.mapTable(leaderboardData);

            const activeClass = (row, rowIndex) => {
                return row.rowId === authedUser ? 'active' : '';
            };

            content = (
                <BootstrapTable
                    keyField='rank'
                    classes="leaderboard-table"
                    bootstrap4
                    columns={columns}
                    data={tableData}
                    hover
                    responsive
                    condensed
                    rowClasses={activeClass}
                    noDataIndication={() => {
                        return "Sorry, there is no data for this yet."
                    }}
                />
            );
        }

        return (
            <Container className={"leaderboard"}>
                <Row>
                    <Col>
                        <h4 className="page-title">Leaderboard</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {content}
                    </Col>
                </Row>
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
    })).sort((a,b) => (b.answeredQuestions+b.createdQuestions)-(a.answeredQuestions+a.createdQuestions));

    return {
        authedUser,
        users,
        questions,
        leaderboardData
    }
}

export default connect(mapStateToProps)(Leaderboard);