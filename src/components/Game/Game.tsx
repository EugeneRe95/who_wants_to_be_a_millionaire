import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import Quiz from "./Quiz"
import StatusBar from "./StatusBar"
import { fetchData, changeQuestion } from "../../redux/actions"
import "@fortawesome/fontawesome-free/css/all.css"
import Spinner from "../Spinner"
import MenuControl from "../MenuControl"
import FetchStatus from "../FetchStatus"
import { RootState } from "../.."
import { QuestionstDataType } from "../../redux/dataReducer"

type MapStatePropTypes = {
  questions: QuestionstDataType,
  counter: number,
  gameEnd: boolean,
  menu: boolean,
}

type MapDispatchPropTypes = {
  fetch: () => void,
  nextQuestion: (questionNumber: number) => void,
}

type PropTypes = MapStatePropTypes & MapDispatchPropTypes

function Game({ questions, counter, gameEnd, menu, fetch, nextQuestion }: PropTypes) {

  useEffect(() => {
    fetch()
    nextQuestion(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (gameEnd) {
    return <Redirect to="/result" />
  }
  return (
    <section id="game" className={menu ? "active" : ""}>
      {!questions ? <FetchStatus /> : (
        <>
          <Spinner />
          <Quiz questions={questions} counter={counter} />
          <StatusBar questions={questions} counter={counter} />
          <MenuControl />
        </>
      )}
    </section>
  )

}

const mapStateToProps = (state: RootState) => ({
  questions: state.dataReducer.questions,
  counter: state.appReducer.counter,
  menu: state.appReducer.menu,
  gameEnd: state.appReducer.gameEnd
})

const mapDispatchToProps = {
  fetch: fetchData,
  nextQuestion: changeQuestion
}
export default connect<MapStatePropTypes, MapDispatchPropTypes, {}, RootState>(mapStateToProps, mapDispatchToProps)(Game)