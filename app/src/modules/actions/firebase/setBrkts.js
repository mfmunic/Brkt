import { brktRef } from '../../../config/firebase';

export default function setBrkts(newBrkt) {
  const brkts = brktRef.child('tests').push(newBrkt);
  return brkts;
}
