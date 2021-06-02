import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAUDLeo7jczI03gyTRKQyoDutnQZReojvE',
    authDomain: 'chat-realtime-287d0.firebaseapp.com',
    projectId: 'chat-realtime-287d0',
    storageBucket: 'chat-realtime-287d0.appspot.com',
    messagingSenderId: '330401339348',
    appId: '1:330401339348:web:9569b9107019d38663e841',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
