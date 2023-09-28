# Login with Google

---

### Step One: Initial Setup

1. Visit [console.firebase.google.com](https://console.firebase.google.com).
2. Create a project (Skip Google Analytics).
3. Register an app (create a file in your project called `firebase-init.js`).
4. Install Firebase: `npm install firebase`
5. Add all the codes in your file that you created in step 3 (the code you obtained in step 3) [Note: It's not recommended to share this code publicly].

---

### Step Two: Integration

6. Go to Docs > Build > Authentication > web > Get Started.
7. Import `app` from the `firebase-init.js` file (created in step 3).
8. Import `getAuth` from `firebase/auth` (in our login page).
9. Create `const auth = getAuth(app)` (in our login page).

---

### Step Three: Provider Setup

10. Click on Google > Import `googleAuthProvider` and create a new provider.
11. Create a `handleGoogleSignIn` function.
12. In the function, use `signInWithPopup(auth, provider)` and pass `auth` and `provider`.
13. Activate SignIn method: Go to Authentication > Sign-in method > Click on the "Add new provider" button (Google, Facebook, GitHub, etc.).

