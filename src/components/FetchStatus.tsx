import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import mainBtnStyles from "../styles/MainBtn.module.scss"
import { RootState } from ".."

type MapStatePropTypes = {
  dataError: boolean,
}

function FetchStatus({ dataError }: MapStatePropTypes) {
  if (dataError) {
    return (
      <h2 className="fetch-status-title">
        OOPS! Some server error.
        <br />
        <Link className={mainBtnStyles.btn} to="/">Return to Main</Link>
      </h2>
    )

  }
  return <h2 className="fetch-status-title"><i className="fas fa-circle-notch fa-spin" /></h2>

}

const mapStateToProps = (state: RootState): MapStatePropTypes => ({ dataError: state.dataReducer.dataError })

export default connect<MapStatePropTypes, {}, {}, RootState>(mapStateToProps, {})(FetchStatus)
