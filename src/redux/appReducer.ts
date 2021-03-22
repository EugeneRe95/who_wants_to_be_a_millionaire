import {
    TOGGLE_MENU,
    COUNTER,
    FINISH_GAME,
    SHOW_SPINNER,
} from "./types";

const initialState = {
    counter: 0,
    gameEnd: false,
    menu: false,
    spinner: false,

}

export type AppStateType = {
    counter: number,
    gameEnd: boolean,
    menu: boolean,
    spinner: boolean
}


export default function appReducer(state: AppStateType = initialState, action: any) {
    switch (action.type) {
        case COUNTER:
            return {
                ...state,
                counter: action.payload
            }
        case TOGGLE_MENU:
            return {
                ...state,
                menu: !state.menu
            }
        case FINISH_GAME:
            return {
                ...state,
                gameEnd: action.payload
            }
        case SHOW_SPINNER:
            return {
                ...state,
                spinner: !state.spinner
            }

        default:
            return state;
    }
}