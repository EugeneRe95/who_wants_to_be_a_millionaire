import React from "react"
import { connect } from "react-redux"
import { checkAnswer } from "../../redux/actions"
import { RootState } from "../.."

type MapDispatchPropTypes = {
  check: (question: string, index: number) => void
}

type OwnPropTypes = {
  status: string,
  question: string,
  index: number,
  delay: string,
  marker: string,
  content: string,
}

type PropTypes = MapDispatchPropTypes & OwnPropTypes

function AnswerItem({ status, question, index, delay, marker, content, check }: PropTypes) {
  function pickAnswer(item1: string, item2: number) {
    check(item1, item2)
  }
  const answerPicked = () => status === "disabled" ? undefined : pickAnswer(question, index)
  return (
    <div
      className={`answer-item animate__animated animate__fadeIn ${status}`}
      style={{ animationDelay: delay }}
      onKeyDown={answerPicked}
      onClick={answerPicked}
      role="presentation"
    >
      <div className="triangle-left" />
      <p>
        <span>{marker}</span>
        {" "}
        {content}
      </p>
      <div className="triangle-right" />
    </div>
  )
}

const mapDispatchToProps = {
  check: checkAnswer
}

export default connect<{}, MapDispatchPropTypes, OwnPropTypes, RootState>(null, mapDispatchToProps)(AnswerItem)
