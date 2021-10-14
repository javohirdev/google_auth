import React from 'react';
import { signInWithGoogle } from '../firebase/config';
import googleIcon from './google.png';

const Login = () => {
  return (
    <div>
      <button className="signInBtn" onClick={signInWithGoogle}>
        <img alt="picture" src={googleIcon} className="googleIcon" />
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;