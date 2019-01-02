import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/Counter/counterActions';

const Counter = props => (
  <Container fluid>
    <div>
      Counter: {props.count}
      <br />
      <Button outline color="success" size="lg" onClick={props.increment}>
        +
      </Button>{' '}
      <Button outline color="danger" size="lg" onClick={props.decrement}>
        -
      </Button>
    </div>
  </Container>
);

Counter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  count: state.getIn(['count'])
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
