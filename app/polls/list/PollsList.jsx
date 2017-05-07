import React, { Component } from 'react';

import PollListItem from './PollsListItem';


export default class PollsList extends Component {

  constructor(props) {
    super(props);
    this.state = { polls: [], isLoaded: false };
  }


  componentDidMount() {
    fetch('http://polls.apiblueprint.org/questions')
      .then(res => res.json())
      .then(polls => this.setState({ polls, isLoaded: true }));
  }


  render() {
    return !this.state.isLoaded ? (<div>Loading...</div>) : (
      <ul className="mdl-list">
        {this.state.polls.map(poll => <PollListItem key={poll.url} poll={poll} />)}
      </ul>
    );
  }
}
