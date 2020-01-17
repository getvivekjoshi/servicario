import firebase from 'firebase/app';
import 'firebase/firestore'

const db = firebase.initializeApp(
    {
        apiKey: "AIzaSyAXJglqatvajH85g--qB1v8Kc7aGH4n41U",
        authDomain: "servicario-71d7d.firebaseapp.com",
        databaseURL: "https://servicario-71d7d.firebaseio.com",
        projectId: "servicario-71d7d",
        storageBucket: "servicario-71d7d.appspot.com",
        messagingSenderId: "364327372894",
        appId: "1:364327372894:web:e4ef8116aade10272d0ccf",
        measurementId: "G-L0ZYP21YLW"
    }
)
    .firestore()

export default db
const { Timestamp } = firebase.firestore
export { Timestamp }