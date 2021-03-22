import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { RootState } from ".."
import hand from "../images/hand.svg"
import { finishGame } from "../redux/actions"
import { QuestionstDataType } from "../redux/dataReducer"
import mainBtnStyles from "../styles/MainBtn.module.scss"

type MapStatePropTypes = {
  counter: number,
  questions: QuestionstDataType
}

type MapDispatchPropTypes = {
  finish: (item: boolean) => void
}

type PropTypes = MapStatePropTypes & MapDispatchPropTypes

function EndPage({ counter, questions, finish }: PropTypes) {
  useEffect(() => {
    finish(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const prize = (questions && counter > 0) ? questions.slice(0, counter).map(item => parseInt(item.rate, 10)).reduce((a, b) => a + b) : 0

  return (
    <section id="end-page">
      <div className="container">
        <img src={hand} alt="hand" />
        <div className="content">
          <p className="score">Total score:</p>
          <h2>
            $
            {prize}
            {" "}
            earned
          </h2>
          <Link className={mainBtnStyles.btn} to="/">Try again</Link>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state: RootState) => ({
  counter: state.appReducer.counter,
  questions: state.dataReducer.questions
})

const mapDispatchToProps = {
  finish: finishGame
}

export default connect<MapStatePropTypes, MapDispatchPropTypes, {}, RootState>(mapStateToProps, mapDispatchToProps)(EndPage)
