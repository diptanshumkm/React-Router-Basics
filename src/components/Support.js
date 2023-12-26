import React from 'react'
import { useNavigate } from 'react-router-dom'

function Support() {

    const navigate = useNavigate()

    function clickHandler(){
        // Move to homepage
        navigate("/")
    }
  return (
    <div>
      <div>Support page</div>

      <button onClick={clickHandler}>Move to Homepage</button>
    </div>
  )
}

export default Support
