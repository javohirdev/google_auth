import React from 'react';
import { auth } from './firebase/config';

const Welcome = ({ user }) => {
     return (
          <div className="welcome">
               <div className="accountInfo">
                    <h1>Salom, <span></span>{user.displayName}</h1>
                    <img src={user.photoURL} alt="photo" />
               </div>
               <button className="signOutBtn" onClick={() => auth.signOut()}>
                    Sign out
               </button>
          </div>
     );
};
export default Welcome;