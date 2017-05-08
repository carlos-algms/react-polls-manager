
export default class Choicesmanager {

  constructor() {
    this.lastChoiceId = 0;
  }

  createNewChoice(value = '') {
    this.lastChoiceId += 1;
    return { id: this.lastChoiceId, value };
  }

  deleteChoice(choices, choiceToDelete) {
    const newChoices = choices.filter(choice => choice.id !== choiceToDelete.id);

    if (!newChoices.length) {
      newChoices.push(this.createNewChoice());
    }

    return newChoices;
  }
}
