export const create = (data) => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const profile = getState().firebase.profile;
  const authorid = getState().firebase.auth.uid;
  firestore.collection('notes').add({
    ...data,
    firstname: profile.firstname,
    lastname: profile.lastname,
    authorid: authorid,
    createdat: new Date(),
  }).then(() => {
    dispatch({ type: 'CREATE_SUCCESS', data });
  }).catch((err) => {
    dispatch({ type: 'CREATE_ERROR', err });
  })
};
