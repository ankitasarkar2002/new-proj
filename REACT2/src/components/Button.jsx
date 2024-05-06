import React from 'react'

const Button = ({text,Handler}) => {  
  return (
    <div className='my-3'>
      <button className="btn btn-info" type="button" id="button"onClick={Handler}> {text}</button>   
    </div>
  )
}

export default Button
