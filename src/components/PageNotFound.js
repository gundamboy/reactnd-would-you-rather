import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class PageNotFound extends Component {
    render() {
        return (
            <Container className={"page-not-found"}>
                <Row>
                    <Col>
                        <h4 className="page-title text-center">Something went wrong</h4>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p className="text-center lead">Whatever you were looking for doesn't seem to be here.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PageNotFound;