import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Square extends Component {
  render() {
    const { black } = this.props;
    const fill = black ? 'white' : 'white';
    const stroke = black ? 'black' : 'black';

    return (
      <div style={{
        backgroundColor: fill,
        color: stroke,
        width: '40px',
        height: '30px',
        border: '1px solid black',
        textAlign: 'center'
      }}>
        {this.props.children}
      </div>
    );
  }
}

Square.propTypes = {
  black: PropTypes.bool
};