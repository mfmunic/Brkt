import { brktRef } from '../../../config/firebase';

export default function readBrkts() {
  const brkts = brktRef
    .child('tests')
    .once('value')
    .then(snapshot => snapshot.val());
  return brkts;
}
