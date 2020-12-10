import axios from 'axios'
import { COUNTER, FETCH_DATA, FETCH_ERROR, FINISH_GAME, SET_STATUS, SHOW_SPINNER, TOGGLE_MENU} from './types'


export function fetchError(){
    return {
        type: FETCH_ERROR
    }
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

export function fetchData(){
    return (dispatch) => {
        
        axios.get('https://eugenere95.github.io/who_wants_to_be_a_millionaire/data.json')
            .then(res => {
                dispatch ({type: FETCH_DATA, payload: res.data})
            })
            .catch(err=>{
                dispatch ({type: FETCH_ERROR})
            })
      };
}

export function checkAnswer(questionTitle, answerIndex){
    return (dispatch, getState) => {

        const {questions}= getState()
        const {counter}= getState()
        
        questions.forEach(item=>{
            if(item.title===questionTitle){

                dispatch({type: SET_STATUS, payload: [item.title, statusUpdate(item.answers, answerIndex, 'selected')]})
                dispatch({type: SHOW_SPINNER})
                
                setTimeout(()=>{
                    if(item.answers[answerIndex].correct){ 

                        dispatch({type: SET_STATUS, payload: [item.title, statusUpdate(item.answers, answerIndex, 'correct')]})
                        dispatch({type: SHOW_SPINNER})

                        if(counter+1!==questions.length){
                            setTimeout(()=>{dispatch({type: COUNTER, payload:counter+1})},1500)
                        }else{
                            setTimeout(()=>{dispatch({type: FINISH_GAME, payload: true})},1500)
                        }
                    }else{
                        dispatch({type: SET_STATUS, payload: [item.title, statusUpdate(item.answers, answerIndex, 'wrong')]})
                        dispatch({type: SHOW_SPINNER})

                        setTimeout(()=>{dispatch({type: FINISH_GAME, payload: true})},1500)
                    }
                },1500)
            }
        })
      };
}

function statusUpdate(array,index, status){
    return array.map((item,i)=>{
          if(i===index){
              return {
                  title: item.title,
                  status: status,
                  correct: item.correct
              }
          }else{
            return {
                title: item.title,
                status: 'disabled',
                correct: item.correct
            }
          }
      })
  }