import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.props.bands.map(band=><Band band={band} deleteBand={this.props.deleteBand}/>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name: name }),
  deleteBand: id => dispatch({type: "DELETE_BAND", id: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
