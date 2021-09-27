export const create = (data) => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const authorid = getState().firebase.auth.uid;
  const profile = getState().firebase.profile;
  const personal = firestore.collection('users').doc(authorid).collection('notes');
  const social = firestore.collection('notes');
  const ref = data.type === 'personal' ? personal : social;
  ref.add({
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

export const update = (data, id) => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const authorid = getState().firebase.auth.uid;
  const personal = firestore.collection('users').doc(authorid).collection('notes');
  const social = firestore.collection('notes');
  const ref = data.type === 'personal' ? personal : social;
  ref.doc(id).update({
    ...data,
  }).then(() => {
    dispatch({ type: 'UPDATE_SUCCESS', data });
  }).catch((err) => {
    dispatch({ type: 'UPDATE_ERROR', err });
  })
};

export const remove = (data, id) => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const authorid = getState().firebase.auth.uid;
  const personal = firestore.collection('users').doc(authorid).collection('notes');
  const social = firestore.collection('notes');
  const ref = data.type === 'personal' ? personal : social;
  ref.doc(id).delete().then(() => {
    dispatch({ type: 'REMOVE_SUCCESS', id });
  }).catch((err) => {
    dispatch({ type: 'REMOVE_SUCCESS', err });
  })
};
