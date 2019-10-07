import React, { Component } from 'react';

class Band extends Component {
// ANOTHER OPTION
// handleOnClick = () => {
//   this.props.deleteBand(this.props.id)
// }
// <button onClick={this.handleOnClick}>Delete</button>

render() {
  return(
    <div>
      <li>{this.props.name}</li>
      <button onClick={() => this.props.deleteBand(this.props.id)}>Delete</button>
    </div>
  )
}
};

export default Band;
