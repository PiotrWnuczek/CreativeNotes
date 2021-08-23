export const create = (data) => (dispatch, { getFirestore }) => {
  const firestore = getFirestore();
  firestore.collection('notes').add({
    ...data,
    firstname: 'Piotr',
    lastname: 'Wnuczek',
    authorid: 12345,
    createdat: new Date(),
  }).then(() => {
    dispatch({ type: 'CREATE', data });
  }).catch((err) => {
    dispatch({ type: 'ERROR', err })
  })
};
