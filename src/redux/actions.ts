import axios from "axios"
import { Action } from "redux"
import { ThunkAction } from "redux-thunk"
import { RootState } from ".."
import { COUNTER, FETCH_DATA, FETCH_ERROR, FINISH_GAME, SET_STATUS, SHOW_SPINNER, TOGGLE_MENU } from "./types"

interface FetchErrorType {
    type: typeof FETCH_ERROR
}

interface ToggleMenuType {
    type: typeof TOGGLE_MENU
}

interface ShowSpinnerType {
    type: typeof SHOW_SPINNER
}

interface ChangeQuestionType {
    type: typeof COUNTER,
    payload: number
}

interface FinishGameType {
    type: typeof FINISH_GAME,
    payload: boolean
}

interface SetStatusType {
    type: typeof SET_STATUS,
    payload: (string | { title: string; status: string; correct: boolean; }[])[]
}

interface FetchDataType {
    type: typeof FETCH_DATA,
    payload: any
}

export function fetchError(): FetchErrorType {
    return {
        type: FETCH_ERROR
    }
}
export function toggleMenu(): ToggleMenuType {
    return {
        type: TOGGLE_MENU
    }
}
export function showSpinner(): ShowSpinnerType {
    return {
        type: SHOW_SPINNER
    }
}

export function changeQuestion(payload: number): ChangeQuestionType {
    return {
        type: COUNTER,
        payload
    }
}

export function finishGame(payload: boolean): FinishGameType {
    return {
        type: FINISH_GAME,
        payload
    }
}
export function setStatus(payload: (string | { title: string; status: string; correct: boolean; }[])[]): SetStatusType {
    return {
        type: SET_STATUS,
        payload
    }
}

export type ActionsTypes = FetchErrorType | ToggleMenuType | ShowSpinnerType | ChangeQuestionType | FinishGameType | SetStatusType | FetchDataType

// eslint-disable-next-line no-undef
export function fetchData(): ThunkAction<void, RootState, unknown, Action<string>> {
    return (dispatch) => {
        axios.get("https://eugenere95.github.io/who_wants_to_be_a_millionaire/data.json")
            .then(res => {
                dispatch({ type: FETCH_DATA, payload: res.data })
            })
            .catch(() => {
                dispatch({ type: FETCH_ERROR })
            })
    };
}

function statusUpdate(array: { title: string, status: string, correct: boolean }[], index: number, status: string) {
    return array.map((item, i) => {
        if (i === index) {
            return {
                title: item.title,
                status,
                correct: item.correct
            }
        }
        return {
            title: item.title,
            status: "disabled",
            correct: item.correct
        }

    })
}

// eslint-disable-next-line no-undef
export function checkAnswer(questionTitle: string, answerIndex: number): ThunkAction<void, RootState, unknown, Action<string>> {
    return (dispatch, getState) => {

        const { appReducer, dataReducer } = getState()
        const { questions } = dataReducer
        const { counter } = appReducer
        // eslint-disable-next-line no-unused-expressions
        questions && questions.forEach((item: any) => {
            if (item.title === questionTitle) {
                dispatch({ type: SET_STATUS, payload: [item.title, statusUpdate(item.answers, answerIndex, "selected")] })
                dispatch({ type: SHOW_SPINNER })

                setTimeout(() => {
                    if (item.answers[answerIndex].correct) {

                        dispatch({ type: SET_STATUS, payload: [item.title, statusUpdate(item.answers, answerIndex, "correct")] })
                        dispatch({ type: SHOW_SPINNER })

                        if (counter + 1 !== questions.length) {
                            setTimeout(() => { dispatch({ type: COUNTER, payload: counter + 1 }) }, 1500)
                        } else {
                            setTimeout(() => { dispatch({ type: FINISH_GAME, payload: true }) }, 1500)
                        }
                    } else {
                        dispatch({ type: SET_STATUS, payload: [item.title, statusUpdate(item.answers, answerIndex, "wrong")] })
                        dispatch({ type: SHOW_SPINNER })

                        setTimeout(() => { dispatch({ type: FINISH_GAME, payload: true }) }, 1500)
                    }
                }, 1500)
            }
        })
    };
}
