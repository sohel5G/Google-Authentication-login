import './App.css'
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase/firebase-init';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { useState } from 'react';

function App() {

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const faceBookProvider = new FacebookAuthProvider();

  const [user, setUser] = useState(null);


  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
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

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const logedInUser = result.user
        setUser(logedInUser)
      })
      .catch(error => {
        console.log('ERR:', error.message)
      })
  }

  const handleFaceBookSignIn = () => {
    signInWithPopup(auth, faceBookProvider)
      .then(result => {
        const logedInUser = result.user
        console.log(logedInUser)
        setUser(logedInUser)
      })
      .catch(error => {
        console.log('ERR:', error.message)
      })
  }


  console.log(user)

  return (
    <>
      <h1>Login With Social </h1>

      {
        user ? <button onClick={handleSignOut}>Sign Out</button> :
          <>
            <button onClick={handleGoogleSignIn}>Login With Google</button>
            <button onClick={handleGithubSignIn}>Login With Github</button>
            <button onClick={handleFaceBookSignIn}>Login With Facebook</button>
          </>
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


