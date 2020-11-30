import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Snackbar from 'react-native-snackbar';

export const signUp = (data) => async (dispatch) => {
  console.log(data);
  const {name, instaUserName, email, password, bio, country, image} = data;

  auth()
    .createUserWithEmailAndPassword(email, password)
    .then((data) => {
      console.log(data);
      console.log('user creation was success');
    })
    .catch((error) => {
      console.log(error);
      Snackbar.show({
        text: 'Signup failed',
        textColor: 'white',
        backgroundColor: 'red',
      });
    });
};
