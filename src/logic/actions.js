import axios from 'axios';

export const FETCH = 'FETCH';
export const UPDATE = 'UPDATE';

export const fetch = () => (dispatch, getState) => {
  return axios
    .get('url', {
      params: {
        param: getState().param,
        key: '123',
      },
    })
    .then(({ data }) => {
      dispatch({ type: FETCH, payload: { data } });
    })
    .catch(err => console.log(err));
};

export const update = (param) => dispatch => {
  dispatch({ type: UPDATE, payload: { param } });
};
