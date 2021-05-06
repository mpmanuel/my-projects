import React, { useState } from "react"

export default function Tab({ children }) {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 })

  function moveHighlight(e) {
    setHighlightStyle({
      left: e.nativeEvent.layerX - 150,
    })
  }

  function hideHighLight(e) {
    setHighlightStyle({
      opacity: 0,
      left: e.nativeEvent.layerX - 150,
    })
  }

  return (
    <div className="browsertab">
      <div
        className="tab"
        onMouseOut={hideHighLight}
        onMouseMove={moveHighlight}
      >
        <div className="highlight" style={highlightStyle} />
        {children}
      </div>
    </div>
  )
}
