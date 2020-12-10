import React from 'react'
import {connect} from 'react-redux'
import {checkAnswer} from '../../redux/actions'

function AnswerItem(props) {
  function pickAnswer(item1, item2) {
    props.checkAnswer(item1, item2)
  }
  return (
    <div 
      className={"answer-item animate__animated animate__fadeIn " + props.status}
      style={{animationDelay: props.delay}}
      onClick={() => { props.status === 'disabled' ? void(0) : pickAnswer(props.question, props.index)
    }}>
      <div className="triangle-left"></div>
        <p><span>{props.marker}</span> {props.content}</p>
      <div className="triangle-right"></div>
    </div>
  )
}

const mapStateToProps = state => {
  return {questions: state.questions, counter: state.counter}
}

const mapDispatchToProps = {
  checkAnswer
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerItem)
