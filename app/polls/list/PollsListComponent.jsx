import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import PollListItem from './PollsListItem';
import { fetchPolls } from '../PollsActions';


class PollsListComponent extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    polls: PropTypes.arrayOf(PropTypes.object).isRequired,
    isFetching: PropTypes.bool.isRequired,
  };

  static INTERVAL_TIME = 60 * 1000;

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPolls());
    this.intervalId = setInterval(() =>
    dispatch(fetchPolls()), PollsListComponent.INTERVAL_TIME);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { isFetching, polls } = this.props;
    return isFetching ? (<div>Loading...</div>) : (
      <ul className="mdl-list polls-list">
        {polls.map(poll => <PollListItem key={poll.url} poll={poll} />)}
      </ul>
    );
  }
}

export default connect()(PollsListComponent);
