import {
  TOGGLE_MENU,
  COUNTER,
  FETCH_DATA,
  FINISH_GAME,
  SET_STATUS,
  SHOW_SPINNER,
  FETCH_ERROR
} from "./types";

const initialState = {
  questions: null,
  counter: 0,
  gameEnd: false,
  menu: false,
  spinner: false,
  dataError: false
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menu: !state.menu
      }

    case FETCH_ERROR:
      return {
        ...state,
        dataError: true
      }

    case SHOW_SPINNER:
      return {
        ...state,
        spinner: !state.spinner
      }

    case FETCH_DATA:
      return {
        ...state,
        questions: action.payload
      }

    case COUNTER:
      return {
        ...state,
        counter: action.payload
      }

    case FINISH_GAME:
      return {
        ...state,
        gameEnd: action.payload
      }

    case SET_STATUS:
      return {
        ...state,
        questions: state.questions.map(item => {
            if (item.title === action.payload[0]) {
              return {title: item.title, answers: action.payload[1], rate: item.rate}
            } else {
              return item
            }
          })
      }

    default:
      return state
  }
}