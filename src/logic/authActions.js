export const signin = (creds) => (dispatch, gs, { getFirebase }) => {
  const firebase = getFirebase();
  firebase.auth().signInWithEmailAndPassword(
    creds.email, creds.password,
  ).then(() => {
    dispatch({ type: 'SIGNIN_SUCCESS' });
  }).catch((err) => {
    dispatch({ type: 'SIGNIN_ERROR', err });
  })
};

export const signout = () => (dispatch, gs, { getFirebase }) => {
  const firebase = getFirebase();
  firebase.auth().signOut().then(() => {
    dispatch({ type: 'SIGNOUT_SUCCESS' });
  })
};

export const signup = (user) => (dispatch, gs, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  firebase.auth().createUserWithEmailAndPassword(
    user.email, user.password,
  ).then((resp) => (
    firestore.collection('users').doc(resp.user.uid).set({
      firstname: user.firstname,
      lastname: user.lastname,
      initials: user.firstname[0] + user.lastname[0],
    })
  )).then(() => {
    dispatch({ type: 'SIGNUP_SUCCESS' });
  }).catch((err) => {
    dispatch({ type: 'SIGNUP_ERROR', err });
  })
};
