import React, { useCallback, useEffect, useState } from "react"
import Question from "./Question"
import CategorySelector from "./CategorySelector"
import ResultModal from "./ResultModal"
import Scoreboard from "./Scoreboard"
import "./Trivia.css"

export default function App() {
  const [question, setQuestion] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("any")
  const [isCorrect, setIsCorrect] = useState(null)
  const [correctScore, setCorrectScore] = useState(0)
  const [wrongScore, setWrongScore] = useState(0)

  const getQuestion = useCallback(() => {
    setIsCorrect(null)

    let url = "https://opentdb.com/api.php?amount=1"
    if (selectedCategory !== "any") url += `&category=${selectedCategory}`

    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestion(data.results[0]))
  }, [selectedCategory])

  useEffect(() => {
    getQuestion()
  }, [getQuestion, selectedCategory])

  function handleQuestionAnswered(answer) {
    const isAnswerCorrect = answer === question.correct_answer
    setIsCorrect(isAnswerCorrect)

    if (isAnswerCorrect) setCorrectScore((score) => score + 1)
    else setWrongScore((score) => score + 1)
  }

  return (
    <div classname="triva">
      <div className="app">
        {isCorrect !== null && (
          <ResultModal
            isCorrect={isCorrect}
            question={question}
            getQuestion={getQuestion}
          />
        )}

        {/* question header ----------------------- */}
        <div className="question-header">
          <CategorySelector
            category={selectedCategory}
            chooseCategory={setSelectedCategory}
          />
          <Scoreboard correct={correctScore} wrong={wrongScore} />
        </div>

        {/* the question itself ----------------------- */}
        <div className="question-main">
          {question && (
            <Question
              question={question}
              answerQuestion={handleQuestionAnswered}
            />
          )}
        </div>

        {/* question footer ----------------------- */}
        <div className="question-footer">
          <button onClick={getQuestion}>Go to next question ????</button>
        </div>
      </div>
    </div>
  )
}
