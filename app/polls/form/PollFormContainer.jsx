import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import PollFormComponent from './PollFormComponent';
import {
  createPoll,
  postNewPoll,
  createChoice,
  deleteChoice,
  inputChanged,
  choiceInputChanged
} from '../PollsActions';


class PollFormContainer extends Component {

  static propTypes = {
    handleAddChoice: PropTypes.func.isRequired,
    handleDeleteChoice: PropTypes.func.isRequired,
    handleNewPollForm: PropTypes.func.isRequired,
    handlePostNewPoll: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleChoiceInputChange: PropTypes.func.isRequired,
    isCreated: PropTypes.bool.isRequired,
    hasErrors: PropTypes.bool.isRequired,
    question: PropTypes.string.isRequired,
    choices: PropTypes.arrayOf(PropTypes.object).isRequired,
  };


  componentWillMount() {
    this.props.handleNewPollForm();
  }

  handleSubmit(event) {
    event.preventDefault();
    const poll = {
      question: this.props.question,
      choices: this.props.choices.map(choice => choice.value)
    };

    this.props.handlePostNewPoll(poll);
  }

  render() {
    const handleSubmit = e => this.handleSubmit(e);

    return (
      <PollFormComponent
        onInpuChange={this.props.handleInputChange}
        onAddChoice={this.props.handleAddChoice}
        onDelChoice={this.props.handleDeleteChoice}
        choices={this.props.choices}
        onChoiceInputChange={this.props.handleChoiceInputChange}
        onSubmit={handleSubmit}
        isCreated={this.props.isCreated}
        hasErrors={this.props.hasErrors}
      />
    );
  }
}


const mapStateToProps = state => ({
  question: state.pollForm.question,
  choices: state.pollForm.choices,
  isCreated: state.pollForm.isCreated,
  hasErrors: state.pollForm.hasErrors
});


const mapDispatchToProps = dispatch => ({
  handleAddChoice: () => dispatch(createChoice()),
  handleDeleteChoice: choiceToDelete => dispatch(deleteChoice(choiceToDelete)),
  handleNewPollForm: () => dispatch(createPoll()),
  handlePostNewPoll: poll => dispatch(postNewPoll(poll)),
  handleInputChange: event => dispatch(inputChanged(event)),
  handleChoiceInputChange: (event, choice) => dispatch(choiceInputChanged(event, choice))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PollFormContainer);
