import React, { Component } from 'react'
import Band from './Band';
import { connect } from 'react-redux'

class BandsContainer extends Component {
  renderBands = () => {
    return this.props.bands.map(band => <Band band={band} key={band.id} delete={this.props.delete} />)
  }

  render() {
    return (
      <div>
        {this.renderBands()}
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
  delete: id => dispatch({type: 'DELETE_BAND', id: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
