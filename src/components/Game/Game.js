import React, { useEffect } from 'react'
import Quiz from './Quiz'
import StatusBar from './StatusBar'
import {fetchData, changeQuestion} from '../../redux/actions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.css'
import Spinner from '../Spinner'
import MenuControl from '../MenuControl'

function Game({questions, counter, gameEnd, menu, fetchData, changeQuestion}) {

    useEffect(()=>{
        fetchData()
        changeQuestion(0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if(gameEnd){
        return <Redirect to="/result" /> 
    } else {
        return (
            <section id="game" className={menu ? 'active' : ''}>
                <Spinner />
                <Quiz questions={questions} counter={counter} />
                <StatusBar questions={questions} counter={counter} />
                <MenuControl />
            </section>
        )
    }
}

const mapStateToProps = state => {
    return{
        questions: state.questions,
        counter: state.counter,
        menu: state.menu,
        gameEnd: state.gameEnd
    }
}

const mapDispatchToProps = {
    fetchData,
    changeQuestion
}
export default connect(mapStateToProps, mapDispatchToProps)(Game)