import axios from 'axios'
import { COUNTER, FETCH_DATA, FINISH_GAME, SET_STATUS, SHOW_SPINNER, TOGGLE_MENU} from './types'

export function fetchData(){
    return (dispatch) => {
        axios.get('https://eugenere95.github.io/who_wants_to_be_a_millionaire/data.json')
            .then(res => {
                dispatch ({type: FETCH_DATA, payload: res.data})
            })
      };
}
export function toggleMenu(){
    return {
        type: TOGGLE_MENU
    }
}
export function showSpinner(){
    return {
        type:SHOW_SPINNER
    }
}

export function changeQuestion(payload){
    return{
        type: COUNTER,
        payload
    }
}
export function finishGame(payload){
    return{
        type: FINISH_GAME,
        payload
    }
}
export function setStatus(payload){
    return{
        type: SET_STATUS,
        payload
    }
}

export function checkAnswer(data){
    return (dispatch, getState) => {
        const {questions}= getState()
        const {counter}= getState()
        
        questions.forEach(item=>{
            if(item.title===data[0]){
                dispatch({type: SET_STATUS, payload: [item.title, 'selected']})
                dispatch({type: SHOW_SPINNER})
                
                setTimeout(()=>{
                    if(item.correctAnswers.includes(data[1])){
                        dispatch({type: SET_STATUS, payload: [item.title, 'correct']})
                        dispatch({type: SHOW_SPINNER})
                        if(counter+1!==questions.length){
                            setTimeout(()=>{dispatch({type: COUNTER, payload:counter+1})},1500)
                        }else{
                            setTimeout(()=>{dispatch({type: FINISH_GAME, payload: true})},1500)
                        }
                    }else{
                        dispatch({type: SET_STATUS, payload: [item.title, 'wrong']})
                        dispatch({type: SHOW_SPINNER})
                        setTimeout(()=>{dispatch({type: FINISH_GAME, payload: true})},1500)
                    }
                },1500)
            }
        })
      };
}