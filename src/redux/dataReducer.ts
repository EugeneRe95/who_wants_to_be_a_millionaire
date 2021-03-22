import { ActionsTypes } from "./actions";
import {
  FETCH_DATA,
  SET_STATUS,
  FETCH_ERROR
} from "./types";

const initialState = {
  questions: null,
  dataError: false
}

export type QuestionstDataType = null | { title: string, answers: { title: string, status: string, correct: boolean }[], rate: string }[]

export type DataStateType = {
  questions: QuestionstDataType,
  dataError: boolean
}

export default function dataReducer(state: DataStateType = initialState, action: ActionsTypes) {
  switch (action.type) {

    case FETCH_ERROR:
      return {
        ...state,
        dataError: true
      }

    case FETCH_DATA:
      return {
        ...state,
        questions: action.payload
      }

    case SET_STATUS:
      return {
        ...state,
        questions: state.questions && state.questions.map(item => {
          if (item.title === action.payload[0]) {
            return { title: item.title, answers: action.payload[1], rate: item.rate }
          }
          return item

        })
      }

    default:
      return state
  }
}