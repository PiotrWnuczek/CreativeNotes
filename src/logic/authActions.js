export const signin = (credentials) => (dispatch, { getFirebase }) => {
  const firebase = getFirebase();
  firebase.auth().signinWithEmailAndPassword(
    credentials.email,
    credentials.password,
  ).then(() => {
    dispatch({ type: 'SIGNIN' });
  }).catch((err) => {
    dispatch({ type: 'ERROR', err })
  })
}
