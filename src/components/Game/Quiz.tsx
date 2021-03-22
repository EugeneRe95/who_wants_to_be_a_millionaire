import React from "react"
import { QuestionstDataType } from "../../redux/dataReducer";
import AnswerItem from "./AnswerItem"

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

type PropTypes = {
  questions: QuestionstDataType,
  counter: number
}

function Quiz({ questions, counter }: PropTypes) {
  return (
    <section id="quiz">
      <div className="container">
        <h3 key={questions && questions[counter].title} className="animate__animated animate__fadeIn">{questions && questions[counter].title}</h3>
        <div className="answers">
          {questions && questions[counter].answers.map((item, index) => (
            <AnswerItem key={item.title} content={item.title} status={item.status} index={index} marker={alphabet[index].toUpperCase()} question={questions[counter].title} delay={`${100 * index}ms`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Quiz
