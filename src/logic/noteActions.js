export const create = (data) => (dispatch, getState, { getFirebase, getFirestore }) => {
  dispatch({ type: 'CREATE', data });
};
