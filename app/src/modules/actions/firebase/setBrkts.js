import { brktRef } from '../../../config/firebase';

export default function setBrkts(newBrkt, brktNo) {
  const brkts = brktRef
    .child('tests')
    .child(brktNo)
    .set(newBrkt);
  return brkts;
}
