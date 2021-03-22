import React from "react"
import { connect } from "react-redux"
import { RootState } from ".."

type MapStatePropTypes = {
  spinner: boolean
}

function Spinner({ spinner }: MapStatePropTypes) {
  if (spinner) {
    return (
      <div id="spinner">
        <i className="fas fa-circle-notch fa-spin" />
      </div>
    )
  }
  return null

}

const mapStateToProps = (state: RootState) => ({
  spinner: state.appReducer.spinner
})

export default connect<MapStatePropTypes, {}, {}, RootState>(mapStateToProps, {})(Spinner)