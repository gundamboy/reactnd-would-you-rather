import React from 'react';
import {connect} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import SingleQuestion from "./SingleQuestion";

const QuestionView = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="needs-an-answer-wrapper">
                        <SingleQuestion id={props.match.params.id} answerView/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default connect()(QuestionView);
