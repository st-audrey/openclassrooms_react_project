import React, { useState } from 'react'
import SignUp from './SignUp';
import Login from './Login';


export default function ConnectModal() {
  const [signUp, setSignUp] = useState(true);


  return (
    <div className='connect-modal'>
      <div className='header-btn'>
        <button style={{ background : signUp ? "#0F2027" : "#203A43"}} onClick={()=> setSignUp(true)}>Sign Up</button>
        <button style={{ background : signUp ? "#203A43" : "#0F2027"}}  onClick={()=> setSignUp(false)}>Login</button>
      </div>
      {signUp ? <SignUp/> : <Login/>}
    </div>
  )
}
