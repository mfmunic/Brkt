import * as firebase from 'firebase/app';
import 'firebase/database';

import config from './keys';

firebase.initializeApp(config);

export const brktRef = firebase.database().ref();
