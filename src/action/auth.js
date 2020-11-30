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

      database()
        .ref('/users/' + data.user.uid)
        .set({
          name,
          instaUserName,
          country,
          image,
          bio,
          uid: data.user.uid,
        })
        .then(() => console.log('Data set success'));
      Snackbar.show({
        text: 'account created',
        textColor: 'white',
        backgroundColor: 'green',
      });
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

export const signIn = (data) => async (dispatch) => {
  console.log(data);
  const {email, password} = data;
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('successfully logged in');
      Snackbar.show({
        text: 'SignIn success',
        textColor: 'white',
        backgroundColor: 'green',
      });
    })
    .catch((error) => {
      console.log(error);
      Snackbar.show({
        text: 'Signin failed',
        textColor: 'white',
        backgroundColor: 'red',
      });
    });
};

export const signOut = () => async (dispatch) => {
  auth()
    .signOut()
    .then(() => {
      console.log('successfully logged out');
      Snackbar.show({
        text: 'Signout success',
        textColor: 'white',
        backgroundColor: 'green',
      });
    })
    .catch((error) => {
      console.log(error);
      Snackbar.show({
        text: 'Signout failed',
        textColor: 'white',
        backgroundColor: 'red',
      });
    });
};
