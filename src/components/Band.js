import React, { Component } from 'react';
import BandInput from '../components/BandInput'

class Band extends Component {

  render() {
    console.log(this.props)
    return(
      <div>
        {<li id={this.props.band.id}>{this.props.band.bandName} <button onClick={()=>this.props.delete(this.props.band.id)}</li>}
      </div>
    );
  }
};

export default Band;
