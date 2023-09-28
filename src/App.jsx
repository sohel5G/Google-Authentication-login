import './App.css'
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase/firebase-init';
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';

function App() {

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);


  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const logedInUser = result.user
        setUser(logedInUser)
      })
      .catch(error => {
        console.log('ERR:', error.message)
      })
  }

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(result => {
        console.log(result)
        setUser(null)
      })
      .catch((error) => {
        console.log(error)
      });
  }


  console.log(user)
  return (
    <>
      <h1>Login With Social </h1>

      {
          user ? <button onClick={handleSignOut}>Sign Out</button> : <button onClick={handleGoogleSignIn}>Login With Google</button>
      }

      {
        user && <div>
          <p><b>User : </b> {user?.displayName}</p>
          <p><b>Email : </b> {user?.email}</p>
          <p><b>ID : </b> {user?.uid}</p>
          <img src={user.photoURL} alt="" />
        </div>
      }

    </>
  )
}

export default App


