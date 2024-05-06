import React,{useState} from 'react'
import Button from './Button'

export default function Form() {
  const[formValues,setFormValues]=useState({

    "fname":"",
    "lname":"",
    "email":"",
    "password":""
  })
const handleChange=(e)=>{
  console.log(e.target);
  const{name,value}=e.target; // nedd name,value thats available in e.target
  setFormValues({...formValues,[name]:value});
  console.log(formValues);

}

const handleSubmit=(e)=>{
  e.preventDefault;



};

  return (
    <>

      <div className="col container ">
        <pre> {JSON.stringify(formValues,undefined,2)}</pre>
        <form onSubmit={handleSubmit}>


        <div className="col"> First Name
          <input type="text"
            name="fname"
            id="fname"
            className="form-control inputBox"
            placeholder="Enter First name"
            value={formValues.fname}
            aria-label="First name"
            onChange={handleChange} />
        </div>
        <div className="col"> Last Name
          <input type="text" name="lname" id="lname" className="form-control inputBox" placeholder="enter Last name" aria-label="Last name" value={formValues.lname} onChange={handleChange} />
        </div>
        <div className="col"> Email id
          <input type="email" name="email" id="email" className="form-control inputBox" placeholder="enter Email id" aria-label="Last name" value={formValues.email} onChange={handleChange}/>
        </div>
        <div className="col"> Password
        <input type="password" name="password" id="password" className="form-control inputBox" placeholder="enter Password" aria-label="password" value={formValues.password} onChange={handleChange} />


        </div>
        <div className='my-3'>
          <Button text={"submit"} />
        </div>
        </form>
        
      </div>



    </>
  )
}
