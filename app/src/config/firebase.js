import * as firebase from 'firebase';

import config from './keys';

firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export const brktRef = databaseRef.child('brkts');
