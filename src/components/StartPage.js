import React from 'react'
import { Link } from 'react-router-dom'
import hand from '../images/hand.svg'

function StartPage() {
    return (
        <section id="start-page">
            <div className="container">
                <img className="animate__animated animate__zoomIn" src={hand} alt="hand"/>
                <div className="content">
                    <h2>Who wants to be a millionaire?</h2>
                    <Link className="main-btn" to="/game">Start</Link>
                </div>
            </div>
        </section>
    )
}

export default StartPage
