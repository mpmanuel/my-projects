import React, { useCallback, useEffect, useState } from "react"
import { useStopwatch } from "react-timer-hook"
import { useSpeechSynthesis } from "react-speech-kit"
import "./WebSpeechTimer.css"

export default function App() {
  const [timers, setTimers] = useState([
    { time: 2, text: "Hello" },
    { time: 5, text: "Welcome to my" },
    { time: 8, text: "Github Page" },
  ])

  const { seconds, isRunning, start, reset } = useStopwatch({ autoStart: null })
  const { speak, speaking, supported } = useSpeechSynthesis()

  const doReset = useCallback(() => reset(0, false), [])

  useEffect(() => {
    const foundTimer = timers.find((t) => t.time === seconds)
    if (foundTimer) {
      speak({ text: foundTimer.text })
    }

    // seconds > last timers time then stop
    if (seconds > timers[timers.length - 1].time) doReset()
  }, [seconds, timers, doReset])

  function updateTimers(index, time, text) {
    const newTimers = [...timers]
    newTimers[index].time = time
    newTimers[index].text = text

    setTimers(newTimers)
  }

  function addTimer() {
    const newTimers = [...timers, { time: 100, text: "hello" }]
    setTimers(newTimers)
  }

  if (!supported) {
    return <div>Your browser is not supported for this speech to text api!</div>
  }

  return (
    <div className="webspeechtimer">
      <div className="app">
        <h2>Talk the Talk</h2>

        <div className="timers">
          {/* timers go here */}
          {timers.map((timer, index) => (
            <TimerSlot
              key={index}
              index={index}
              timer={timer}
              updateTimers={updateTimers}
            />
          ))}

          <button className="add-button" onClick={addTimer}>
            Add
          </button>
        </div>

        {/* seconds */}
        <h2>{seconds}</h2>

        {/* buttons */}
        <div className="buttons">
          {!isRunning && (
            <button className="start-button" onClick={start}>
              Start
            </button>
          )}
          {isRunning && (
            <button className="stop-button" onClick={() => reset(0, false)}>
              Stop
            </button>
          )}

          {speaking && <p>I am speaking!</p>}
        </div>
      </div>
    </div>
  )
}

function TimerSlot({ index, timer, updateTimers }) {
  const [time, setTime] = useState(timer.time)
  const [text, setText] = useState(timer.text)

  function handleBlur() {
    updateTimers(index, time, text)
  }

  return (
    <div className="webspeechtimer">
      <form className="timer" key={index}>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(+e.target.value)}
          onBlur={handleBlur}
        />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleBlur}
        />
      </form>
    </div>
  )
}
