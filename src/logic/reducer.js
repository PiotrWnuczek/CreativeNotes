import { FETCH, UPDATE } from 'logic/actions';

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        inbox: [...action.payload.data],
      };
    case UPDATE:
      return {
        ...state, param: action.payload.param,
      };
    default:
      return state;
  }
};

export default reducer;
