import React, { useState, useEffect } from 'react';
import Welcome from './Welcome';
import Login from './signIn/Login';
import firebase from './firebase/config';
import './style.css';

const App = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  }, [])

  return (
    <div className="app">
      {user ? <Welcome user={user} /> : <Login />}
    </div>
  );
};

export default App;