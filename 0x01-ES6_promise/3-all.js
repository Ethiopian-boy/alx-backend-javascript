import {
  uploadPhoto,
  createUser,
} from './utils';

export default function handleProfileSignup() {
  const prm1 = uploadPhoto();
  const prm2 = createUser();

  return promise.all([prm1, prm2]).then((data) => {
    const result = Object.assign(...data);
    console.log(`${result.body} ${result.firstName} ${result.lastName}`);
  }).catch(() => console.log('Signup system offline'));
}
