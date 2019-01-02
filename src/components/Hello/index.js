import React from 'react';
import HelloChild from './HelloChild';
import { Container } from 'reactstrap';

const Hello = () => (
  <div>
    <Container fluid>
      <div>Hello</div>
      <br />
      <HelloChild />
      <br />
    </Container>
  </div>
);

export default Hello;
