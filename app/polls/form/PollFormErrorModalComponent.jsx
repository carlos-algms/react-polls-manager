import React, { Component } from 'react';

export default class PollFormErrorModal extends Component {

  componentDidMount() {
    this.dialog.showModal();
  }

  componentDidUpdate() {
    this.dialog.showModal();
  }

  handleClose() {
    this.dialog.close();
  }

  render() {
    return (
      <dialog ref={(node) => { this.dialog = node; }} className="poll-form__error-dialog mdl-dialog">
        <h4 className="mdl-dialog__title">Error creating Poll</h4>
        <div className="mdl-dialog__content">
          <p>
            Unfortunatelly the server returned an error.
          </p>
          <p>
            Please, try again later.
          </p>
        </div>
        <div className="mdl-dialog__actions">
          <button type="button" className="mdl-button close" onClick={() => this.handleClose()}>Close</button>
        </div>
      </dialog>
    );
  }
}
