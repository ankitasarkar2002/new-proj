
import React from 'react'

const Button = ({text,Handler}) => {  
  return (
    <div >
      <button type="submit" className=" btn btn-primary" onClick={Handler}> {text}</button>
    </div>
  )
}

export default Button