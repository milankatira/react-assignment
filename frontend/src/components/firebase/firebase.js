import  firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import config from "./config";

const fireDb=firebase.initializeApp(config);

const auth=firebase.auth();
const db = firebase.firestore();
export  {auth,db};

export default fireDb.database().ref();