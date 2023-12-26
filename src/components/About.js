import React from 'react'
import { useNavigate } from 'react-router-dom'

function About()
{


    const navigate = useNavigate()
    function clickHandler(){
        // Move back
        navigate(-1)
    }
  return (


    <div>
      <div>This is about page</div>

      <button onClick={clickHandler}>Move back</button>
    </div>
  )
}

export default About
