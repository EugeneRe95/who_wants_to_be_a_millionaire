import React from "react"
import { connect } from "react-redux"
import { RootState } from ".."
import { toggleMenu } from "../redux/actions"

type PropTypes = {
  menu: boolean
}

function MenuControl({ menu }: PropTypes) {
  function menuVisibility() {
    toggleMenu()
  }
  return (
    <div id="menu-control" role="presentation" onClick={menuVisibility} onKeyDown={menuVisibility}>
      {menu ? <i className="fas fa-times" /> : <i className="fas fa-bars" />}
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  menu: state.appReducer.menu
})

const mapDispatchToProps = {
  toggleMenu
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuControl)