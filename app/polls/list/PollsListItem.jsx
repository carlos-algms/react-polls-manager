import React from 'react';
import PropTypes from 'prop-types';


export default function PollsListItem(props) {
  const poll = props.poll;
  return (
    <li className="mdl-list__item mdl-list__item--two-line">
      <span className="mdl-list__item-primary-content">
        <i className="material-icons mdl-list__item-avatar">format_list_bulleted</i>
        <span>{poll.question}</span>
        <span className="mdl-list__item-sub-title">{poll.choices.length} choices</span>
      </span>
    </li>
  );
}


PollsListItem.propTypes = {
  poll: PropTypes.shape({
    id: PropTypes.number,
    question: PropTypes.string
  }).isRequired
};
