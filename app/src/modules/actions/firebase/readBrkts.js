import { brktRef } from '../../../config/firebase';

export default function readBrkts() {
  const brkts = brktRef.once('value').then(snapshot => snapshot.val());
  return brkts;
}
