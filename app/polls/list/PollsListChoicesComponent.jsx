import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class PollsListChoicesComponent extends Component {

  static propTypes = {
    choices: PropTypes.arrayOf(PropTypes.shape({
      choice: PropTypes.string,
      url: PropTypes.string,
      votes: PropTypes.number,
    })).isRequired,
  };


  componentWillMount() {
    this.calculateVotes();
  }


  calculateVotes() {
    this.totalVotes = this.props.choices.reduce((total, choice) => total + choice.votes, 0);
    this.voteWeight = this.totalVotes === 0 ? 0 : 100 / this.totalVotes;
  }


  render() {
    const { choices } = this.props;
    const voteWeight = this.voteWeight;

    return (
      <ul ref={(node) => { this.list = node; }} className="polls-list__choices mdl-cell mdl-cell--4-col">
        {choices.map(choice => (
          <li
            key={choice.url}
            className="polls-list__choices__item"
            style={{ backgroundSize: `${voteWeight * choice.votes}% 100%` }}
          >
            <span className="">
              {choice.choice}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}
