import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.any)
  };

  static defaultProps = {
    children: (<div />)
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
