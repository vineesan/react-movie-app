import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBNfrLuDwNTXNnUg5vblOerlN-yWZUjkds", // Firebase my login key
  authDomain: "sociallogin-237811.web.app",
  databaseURL: "https://sociallogin-237811.web.app",
  projectId: "sociallogin-237811",
  messagingSenderId: "886505370922"
};

const app = firebase.initializeApp(config);
const facebookProvider = new firebase.auth.FacebookAuthProvider(); //Not configured 
const githubProvider = new firebase.auth.GithubAuthProvider(); //Configured
const twitterProvider = new firebase.auth.TwitterAuthProvider(); //Not configured
const googleProvider = new firebase.auth.GoogleAuthProvider(); //configured

export { app, facebookProvider, githubProvider, twitterProvider, googleProvider };
