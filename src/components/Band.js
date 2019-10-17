import React, { Component } from 'react';
import BandInput from '../components/BandInput'

class Band extends Component {

  render() {
    console.log(this.props)
    return(
      <div>
        {<li id={this.props.band.id}>{this.props.band.name} <button onClick={()=>this.props.deleteBand(this.props.band.id)}>DELETE</button></li>}
      </div>
    );
  }
};

export default Band;
