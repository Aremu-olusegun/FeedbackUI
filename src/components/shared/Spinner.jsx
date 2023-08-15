import React from 'react'
import spinner from "../../assets/spinner.gif"

const Spinner = () => {
  return (
    <img src={spinner} alt="Loading..." style={{width: "50px", margin: "auto", marginTop: "2rem", display: "block"}}/>
  )
}

export default Spinner