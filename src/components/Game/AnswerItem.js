import React, { useState } from 'react'
import { connect } from 'react-redux'
import { checkAnswer } from '../../redux/actions'

function AnswerItem(props) {
  const [status, setStatus] = useState(false)
  function pickAnswer(item1, item2){
      setStatus(true)
      props.checkAnswer([item1,item2]) 
  }
  function changeStatus(){
   return status ? (props.questions ? props.questions[props.counter].status : '') : ''
  }
  return (
    <div className={"answer-item animate__animated animate__fadeIn "+changeStatus()} style={{animationDelay: props.delay}} onClick={()=>{pickAnswer(props.title, props.content)}}>
      <div className="triangle-left"></div>
      <p><span>{props.marker}</span> {props.content}</p>
      <div className="triangle-right"></div>
    </div>
  )
}

const mapStateToProps= state=>{
  return{
    questions: state.questions,
    counter: state.counter
  }
}

const mapDispatchToProps={
  checkAnswer
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerItem)
