import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import updateMdlJs from '../../utils/updateMdlJs';
import PollFormChoices from './PollFormChoicesComponent';

export default class PollFormComponent extends Component {

  static propTypes = {
    onInpuChange: PropTypes.func.isRequired,
    onAddChoice: PropTypes.func.isRequired,
    onDelChoice: PropTypes.func.isRequired,
    getChoices: PropTypes.func.isRequired,
    onChoiceInputChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  componentDidMount() {
    updateMdlJs(this.form);
  }

  render() {
    return (
      <form ref={(form) => { this.form = form; }} onSubmit={this.props.onSubmit}>
        <h1>Create new Poll</h1>

        <div className="mdl-grid">
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col">
            <input className="mdl-textfield__input" required type="text" id="question" name="question" onChange={this.props.onInpuChange} />
            <label className="mdl-textfield__label" htmlFor="question">Question</label>
          </div>
        </div>

        <PollFormChoices
          choices={this.props.getChoices()}
          onAddChoice={this.props.onAddChoice}
          onDelChoice={this.props.onDelChoice}
          onChoiceInputChange={this.props.onChoiceInputChange}
        />

        <p>
          <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            Submit
          </button>
          &nbsp;
          <Link to="/" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
            Cancel
          </Link>
        </p>
      </form>
    );
  }
}
