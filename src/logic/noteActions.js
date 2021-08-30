export const create = (data) => (dispatch, gs, { getFirestore }) => {
  const firestore = getFirestore();
  firestore.collection('notes').add({
    ...data,
    firstname: 'Piotr',
    lastname: 'Wnuczek',
    authorid: 12345,
    createdat: new Date(),
  }).then(() => {
    dispatch({ type: 'CREATE_SUCCESS', data });
  }).catch((err) => {
    dispatch({ type: 'CREATE_ERROR', err })
  })
};
