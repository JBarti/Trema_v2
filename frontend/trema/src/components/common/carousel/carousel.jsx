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
            step: step,
            elements: elements,
        };
        this.nextStep = this.nextStep.bind(this);
    }

    nextStep(step) {
        let to = this.state.to;
        let from = this.state.from;
        from += step;
        to += step;
        if (from >= this.state.elements.length) {
            from = 0;
            to = step;
        }
        this.setState({ from: from, to: to });
        console.log(`From: ${from} To: ${to}`);
    }

    lastStep(step) {
        let to = this.state.to;
        let from = this.state.from;
        from -= step;
        to -= step;
        if (from < 0) {
            from = this.state.elements.length - step;
            to = this.state.elements.length;
        }
        this.setState({ from: from, to: to });
        console.log(`From: ${from} To: ${to}`);
    }

    render() {
        const renderedElements = this.state.elements.slice(this.state.from, this.state.to);
        return (
            <div className={styles['carousel']} >
                <button onClick={() => this.lastStep(this.state.step)}>Lijevo</button>
                {renderedElements}
                <button onClick={() => this.nextStep(this.state.step)} >Desno</button>
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
