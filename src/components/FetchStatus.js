import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import mainBtnStyles from '../styles/MainBtn.module.scss'

function FetchStatus({error}) {
  if (error) {
    return (
    <h2 className="fetch-status-title">OOPS! Some server error.<br/>
        <Link className={mainBtnStyles.btn} to="/">Return to Main</Link>
    </h2>
    )

  } else {
    return <h2 className="fetch-status-title"><i className="fas fa-circle-notch fa-spin"></i></h2>
  }
}

const mapStateToProps = state => {
  return {error: state.dataError}
}

export default connect(mapStateToProps, null)(FetchStatus)
