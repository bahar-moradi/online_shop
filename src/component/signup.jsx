import React from 'react'
import { useState } from 'react';
import Register from './register';
import SignUpSuccess from './SignUpSuccess';

const SignUp = () => {
    const[registerCompleet,setRegisterCompleet]=useState(false);
    const submitForm=()=>{
        setRegisterCompleet(true);
    };
  return (
    <div>
        {!registerCompleet? <Register submitForm={submitForm}/> :<SignUpSuccess/>}
    </div>
  )
}

export default SignUp