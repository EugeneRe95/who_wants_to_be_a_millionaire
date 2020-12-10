import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import hand from '../images/hand.svg'
import { finishGame } from '../redux/actions'

function EndPage({counter, questions, finishGame}) {
    useEffect(()=>{
        finishGame(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const prize = (questions && counter>0) ? questions.slice(0,counter).map(item=>item.rate).reduce((a,b)=>parseInt(a, 10)+parseInt(b,10)) : 0
    return (
        <section id="end-page">
            <div className="container">
                <img src={hand} alt="hand"/>
                <div className="content">
                    <p className="score">Total score:</p>
                    <h2>${prize} earned</h2>
                    <Link className="main-btn" to="/">Try again</Link>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps= state=>{
    return{
        counter: state.counter,
        questions: state.questions
    }
}

const mapDispatchToProps = {
    finishGame
}

export default connect(mapStateToProps, mapDispatchToProps)(EndPage)
