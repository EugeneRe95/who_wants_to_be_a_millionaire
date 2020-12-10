import React from 'react'
import {connect} from 'react-redux'

function StatusBar(props) {
    return (
        <section id="status-bar"> 
            <div className="rates">

                {props.questions.map(((item,index)=>(
                <div className={"rate " + (props.counter<index ? '' : (props.counter===index ? 'active' : 'passed'))} key={item.title+item.rate}>
                    <div className="triangle-left"></div>
                    <p>{item.rate}</p>
                    <div className="triangle-right"></div>
                </div>
            )))}
            </div>
        </section>
    )
}

const mapStateToProps = state =>{
    return{
        menu:state.menu
    }
}

export default connect(mapStateToProps, null)(StatusBar)
