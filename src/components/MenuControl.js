import React from 'react'
import {connect} from 'react-redux'
import { toggleMenu} from '../redux/actions'

function MenuControl({menu, toggleMenu}) {
    function menuVisibility(){
        toggleMenu()
    }
    return (
        <div id="menu-control" onClick={menuVisibility}>
            {menu ? <i className="fas fa-times"></i>  : <i className="fas fa-bars"></i>}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        menu: state.menu
    }
}

const mapDispatchToProps = {
    toggleMenu
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuControl)