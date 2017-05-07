import React, { Component } from 'react';
import axios from 'axios';

import PollFormComponent from './PollFormComponent';
import ChoicesManager from '../ChoicesManager';

export default class PoolForm extends Component {

  constructor(props) {
    super(props);
    this.choicesManager = new ChoicesManager();

    this.state = {
      choices: [this.choicesManager.createNewChoice()],
      isCreated: false,
      hasErrors: false
    };
  }

  getChoices() {
    return this.state.choices;
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  handleAddChoice() {
    this.setState({
      choices: [...this.state.choices, this.choicesManager.createNewChoice()]
    });
  }

  handleDeleteChoice(choiceToDelete) {
    const newChoices = this.choicesManager.deleteChoice(this.state.choices, choiceToDelete);

    this.setState({
      choices: newChoices
    });
  }

  handleChoiceInputChange(event) {
    const target = event.target;
    const value = target.value;
    const index = target.dataset.index;
    const newChoices = this.state.choices;
    newChoices[index].value = value;

    this.setState({
      choices: newChoices
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const endPoint = 'http://polls.apiblueprint.org/questions';
    const data = {
      question: this.state.question,
      choices: this.state.choices.map(choice => choice.value)
    };

    axios.post(endPoint, data)
      .then(() => this.setState({ isCreated: true }))
      .catch((error) => {
        console.error(error);
        this.setState({ hasErrors: true });
      });
  }

  render() {
    const handleInputChange = target => this.handleInputChange(target);
    const handleAddChoice = () => this.handleAddChoice();
    const handleDeleteChoice = choiceToDelete => this.handleDeleteChoice(choiceToDelete);
    const getChoices = () => this.getChoices();
    const handleChoiceInputChange = event => this.handleChoiceInputChange(event);
    const handleSubmit = e => this.handleSubmit(e);

    return (
      <PollFormComponent
        onInpuChange={handleInputChange}
        onAddChoice={handleAddChoice}
        onDelChoice={handleDeleteChoice}
        getChoices={getChoices}
        onChoiceInputChange={handleChoiceInputChange}
        onSubmit={handleSubmit}
        isCreated={this.state.isCreated}
        hasErrors={this.state.hasErrors}
      />
    );
  }
}
