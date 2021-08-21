export const create = (data) => (dispatch) => {
  dispatch({ type: 'CREATE', data });
};
