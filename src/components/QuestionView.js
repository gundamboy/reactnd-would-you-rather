import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AnsweringAQuestionView from "./AnsweringAQuestionView";

const QuestionView = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="needs-an-answer-wrapper">
                        <AnsweringAQuestionView id={props.match.params.id} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default QuestionView;
