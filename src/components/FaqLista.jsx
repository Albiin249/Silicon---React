import React from 'react'
import { useState, useEffect } from 'react'

function FaqLista() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch("https://win24-assignment.azurewebsites.net/api/faq")
            .then((response) => response.json())
            .then((data) => setQuestions(data))
    }, [])


    return (
        <div className="info-lista">
            {questions.map((question) => (
                <details key={question.id}>
                    <summary className="rubrik">{question.title}</summary>
                    <p className="body-s">{question.content}</p>
                </details>
            ))}
        </div>
    )
}

export default FaqLista