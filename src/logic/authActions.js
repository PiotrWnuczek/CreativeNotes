export const signin = (creds) => (dispatch, gs, { getFirebase }) => {
  const firebase = getFirebase();
  firebase.auth().signInWithEmailAndPassword(
    creds.email, creds.password,
  ).then(() => {
    dispatch({ type: 'SIGNIN_SUCCESS' });
  }).catch((err) => {
    dispatch({ type: 'SIGNIN_ERROR', err })
  })
}

export const signout = () => (dispatch, gs, { getFirebase }) => {
  const firebase = getFirebase();
  firebase.auth().signOut().then(() => {
    dispatch({ type: 'SIGNOUT_SUCCESS' });
  });
}
