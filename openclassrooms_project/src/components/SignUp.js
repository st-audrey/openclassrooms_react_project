import React, { useRef } from "react";
import { auth } from "../utils/firebase.config";


export default function SignUp() {
  const registerEmail = useRef();
  const registerPassword = useRef();

  const handleRegister = (e) => {
    e.preventDefault();

    try{
      auth.createUserWithEmailAndPassword(
        registerEmail.current.value,
        registerPassword.current.value
        )

    }catch(error){
      console.log(error.message)
    }
  };

  return (
    <div className="signup-container">
      <div className="signup">
        <h3>Sign Up</h3>
        <form onSubmit={(e) => handleRegister(e)}>
          <input type="text" placeholder="Name" required />
          <input
            type="email"
            placeholder="Email"
            ref={registerEmail}
            required
          />
          <input
            type="password"
            placeholder="Password"
            ref={registerPassword}
            required
          />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
}
