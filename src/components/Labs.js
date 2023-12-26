import React from 'react'
import { useNavigate } from 'react-router-dom'

function Labs (){


    const navigate = useNavigate()

    function clickHandler(){
        // Move to support page
        navigate("/support")        
    }

  return (
    <div>
      <div>This is Labs Page</div>

      <button onClick={clickHandler}> Move to Support page</button>
    </div>
  )
}

export default Labs
