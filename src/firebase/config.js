import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBBZWYN5LbfogxAY00dn8BEVnV4KejYcao",
    authDomain: "auditenseign1.firebaseapp.com",
    databaseURL: "https://auditenseign1.firebaseio.com",
    projectId: "auditenseign1",
    storageBucket: "auditenseign1.appspot.com",
    messagingSenderId: "476206393443",
    appId: "1:476206393443:web:7577055f439d31f4dc7056"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };