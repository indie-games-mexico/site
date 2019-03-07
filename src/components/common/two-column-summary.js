import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const TwoColumnSummary = ({left, right}) => (
  <Container
    style={{
      padding: '20px 0px'
    }}
  >
    <Row>
      <Col sm="12" md={12} lg={6}>
        {left}
      </Col>
      <Col sm="12" md={12} lg={6}>
        {right}
      </Col>
    </Row>
  </Container>
);
