import React, { Component } from 'react';
import uuid from 'uuid';

class BandInput extends Component {

  state = {
    id:0,
    bandName: ''
  }

  handleOnChange(event) {
    this.setState({
      id: uuid(),
      bandName: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      id:0,
      bandName: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
