import React from "react"
import { QuestionstDataType } from "../../redux/dataReducer"

type OwnPropTypes = {
  counter: number,
  questions: QuestionstDataType
}

function StatusBar({ questions, counter }: OwnPropTypes) {
  return (
    <section id="status-bar">
      <div className="rates">

        {questions && questions.map(((item, index) => (
          <div className={`rate ${counter < index ? "" : (counter === index ? "active" : "passed")}`} key={item.title + item.rate}>
            <div className="triangle-left" />
            <p>{item.rate}</p>
            <div className="triangle-right" />
          </div>
        )))}
      </div>
    </section>
  )
}

export default StatusBar
