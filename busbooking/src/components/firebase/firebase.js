import  firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import config from "./config";



// const authnumber = getAuth();
// auth.languageCode = 'it';

// import { getAuth, signInWithPhoneNumber } from "firebase/auth";

// const phoneNumber = getPhoneNumberFromUserInput();
// const appVerifier = window.recaptchaVerifier;

// const auth = getAuth();
// signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       window.confirmationResult = confirmationResult;
//       // ...
//     }).catch((error) => {
//       // Error; SMS not sent
//       // ...
//     });


firebase.initializeApp(config);

const auth=firebase.auth();
const db = firebase.firestore();
export  {auth,db};

export default firebase