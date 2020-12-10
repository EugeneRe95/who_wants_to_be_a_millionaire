import React from 'react'
import AnswerItem from './AnswerItem'

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function Quiz(props) {
    return (
        <section id="quiz">
            <div className="container">
                
                    <h3 key={props.questions[props.counter].title} className="animate__animated animate__fadeIn">{props.questions[props.counter].title}</h3>
                    <div className="answers">
                        {props.questions[props.counter].answers.map((item, index)=>(
                            <AnswerItem key={item.title} content={item.title} status={item.status} index={index} marker={alphabet[index].toUpperCase()} question={props.questions[props.counter].title} delay={`${100 * index}ms`} />
                     ))}
                    </div>
               
            </div>
        </section>
    )
}

export default Quiz
