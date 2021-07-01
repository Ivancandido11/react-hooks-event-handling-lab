import React from "react"

const enteringPassword = () => console.log("Entering password...")

const Keypad = () => (
  <input type="password" onChange={enteringPassword}/>
)

export default Keypad