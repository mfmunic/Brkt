import { brktRef } from '../../../config/firebase';

export default function deleteBrkts(key) {
  const brkts = brktRef
    .child('tests')
    .child(key)
    .remove();
  return brkts;
}
