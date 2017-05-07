import React, { Component } from 'react';
import PropTypes from 'prop-types';

import updateMdlJs from '../../utils/updateMdlJs';


export default class PollFormChoicesComponent extends Component {

  static propTypes = {
    choices: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired
    })).isRequired,
    onAddChoice: PropTypes.func.isRequired,
    onDelChoice: PropTypes.func.isRequired,
    onChoiceInputChange: PropTypes.func.isRequired,
  };

  componentDidUpdate() {
    updateMdlJs(this.listOfChoices);
  }

  render() {
    const choices = this.props.choices || [];

    return (
      <div>
        <h3>Choices</h3>

        <ul ref={(node) => { this.listOfChoices = node; }} className="mdl-list poll-form__choices">
          {choices.map((choice, i) => (
            <li key={choice.id} className="mdl-list__item poll-form__choices__choice">
              <div className="mdl-list__item-primary-content">
                <button
                  type="button"
                  className="mdl-button mdl-js-button mdl-button--icon mdl-list__item-icon"
                  onClick={() => this.props.onDelChoice(choice)}
                >
                  <i className="material-icons">delete_forever</i>
                </button>
                <div className="mdl-textfield mdl-js-textfield">
                  <input
                    id={`choice${i}`}
                    className="mdl-textfield__input"
                    type="text"
                    value={choice.value}
                    data-index={i}
                    onChange={this.props.onChoiceInputChange}
                  />
                  <label htmlFor={`choice${i}`} className="mdl-textfield__label">Choice text</label>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p>
          <button
            type="button"
            className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored mdl-js-ripple-effect"
            onClick={this.props.onAddChoice}
          >
            <i className="material-icons">add</i>
          </button>
        </p>

      </div>
    );
  }
}
