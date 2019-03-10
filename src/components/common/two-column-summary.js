import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

export const TwoColumnSummary = ({left, right}) => (
  <div
    style={{
      padding: '20px 0px'
    }}
  >
    <div>
      <div sm="12" md={12} lg={6}>
        {left}
      </div>
      <div sm="12" md={12} lg={6}>
        {right}
      </div>
    </div>
  </div>
);
