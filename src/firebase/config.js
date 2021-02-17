import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyABNzAnIz4s_mYGz7EoOpHJdDqZYAEU0_Y',
	authDomain: 'crud-app-3c1b9.firebaseapp.com',
	databaseURL: 'https://crud-app.friebaseio.com',
	projectId: 'crud-app-3c1b9',
	storageBucket: 'crud-app-3c1b9.appspot.com',
	messagingSenderId: '110715170919',
	appId: '1:110715170919:android:4db941cbd0b339efb764c2',
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

