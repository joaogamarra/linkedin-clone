import firebase from 'firebase'

const firebaseConfig = {
	apiKey: 'AIzaSyD7TRM8AFkSKwN1mTx6OAennPlu0GJLVoQ',
	authDomain: 'linkedin-clone-4d6e1.firebaseapp.com',
	projectId: 'linkedin-clone-4d6e1',
	storageBucket: 'linkedin-clone-4d6e1.appspot.com',
	messagingSenderId: '1027207689657',
	appId: '1:1027207689657:web:719ae00f98a2153c5a7268',
	measurementId: 'G-M9D73X23RE',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
