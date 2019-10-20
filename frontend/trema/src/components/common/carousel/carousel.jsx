/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './carousel.module.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    const { elements } = this.props;
    const { step } = this.props;
    this.state = {
      from: 0,
      to: step,
      step,
      elements,
    };
    this.nextStep = this.nextStep.bind(this);
  }

  nextStep(step) {
    let { to } = this.state;
    let { from } = this.state;
    from += step;
    to += step;
    if (from >= this.state.elements.length) {
      from = 0;
      to = step;
    }
    this.setState({ from, to });
  }

  lastStep(step) {
    let { to } = this.state;
    let { from } = this.state;
    from -= step;
    to -= step;
    if (from < 0) {
      from = this.state.elements.length - step;
      to = this.state.elements.length;
    }
    this.setState({ from, to });
  }

  render() {
    const { state } = this;
    const { step } = state;
    const { elements } = state;
    const renderedElements = elements.slice(state.from, state.to);
    return (
      <div className={styles['carousel']}>
        <button type='button' onClick={() => this.lastStep(step)}>Lijevo</button>
        {renderedElements}
        <button type='button' onClick={() => this.nextStep(step)}>Desno</button>
      </div>
    );
  }
}

Carousel.propTypes = {
  elements: PropTypes.array,
  step: PropTypes.number,
};

Carousel.defaultProps = {
  elements: [],
  step: 1,
};

export default Carousel;
