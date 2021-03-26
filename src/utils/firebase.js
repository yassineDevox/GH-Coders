import firebase from 'firebase/app'
import 'firebase/auth';

// Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDYjeUp3usgIHZ3P-IJFReY9QyttiiCZ8M",
  authDomain: "e-commerce-c4214.firebaseapp.com",
  databaseURL: "https://e-commerce-c4214-default-rtdb.firebaseio.com",
  projectId: "e-commerce-c4214",
  storageBucket: "e-commerce-c4214.appspot.com",
  messagingSenderId: "421746974629",
  appId: "1:421746974629:web:6b07121424fd531db3524c"
 };


// Initialize Firebase  
const app = firebase.initializeApp(firebaseConfig);  
  
//exporter notre base de données
export default app; 
//export the auth app
export const auth = app.auth();