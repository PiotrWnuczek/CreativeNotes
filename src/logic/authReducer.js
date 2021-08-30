const initial = { error: null };

const authReducer = (state = initial, action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      console.log('signin success');
      return { ...state, error: null };
    case 'SIGNIN_ERROR':
      console.log('signin error');
      return { ...state, error: 'signin failed' };
    default:
      return state;
  }
};

export default authReducer;
