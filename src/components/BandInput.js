import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state.name);
    this.setState({
      name: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: "ADD_BAND", payload: formData }),
})

export default connect(null, mapDispatchToProps)(BandInput);
