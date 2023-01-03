import { 
  uploadPhoto,
  createUser,
} from "./utils";

function handleProfileSignup() {
  const prm1 = uploadPhoto();
  const prm2 = createUser();

  return promises.all([prm1, prm2]).then((data) => {
    const result = Object.assign(...data);
    console.log(`${result.body} ${result.firstName} ${result.lastName}`);
  }).catch(() => console.log('Signup system offline'));
}

export default handleProfileSignup;
