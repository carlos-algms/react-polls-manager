import React from 'react';
import PropTypes from 'prop-types';


export default function PollsListItem(props) {
  const poll = props.poll;
  return (
    <li className="collection-item">
      <div>
        {poll.id} - {poll.question}
        <a href="#!" className="secondary-content">
          <i className="material-icons">send</i>
        </a>
      </div>
    </li>
  );
}


PollsListItem.propTypes = {
  poll: PropTypes.shape({
    id: PropTypes.number,
    question: PropTypes.string
  }).isRequired
};
