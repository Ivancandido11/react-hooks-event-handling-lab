import React from "react"

const focusEvent = () => console.log("Good!")
const blurEvent = () => console.log("Hey! Eyes on me!")

const EyesOnMe = () => (
  <button 
    onFocus={focusEvent} 
    onBlur={blurEvent}>
      Eyes on me
  </button>
)

export default EyesOnMe