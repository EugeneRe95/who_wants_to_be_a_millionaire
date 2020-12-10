import React from 'react'
import {connect} from 'react-redux'

function Spinner({spinner}) {
    if(spinner){
    return (
        <div id="spinner">
            <i className="fas fa-circle-notch fa-spin"></i>
        </div>
    )}else{
        return null
    }
}

const mapStateToProps = state => {
    return{
        spinner: state.spinner
    }
}

export default connect(mapStateToProps, null)(Spinner)