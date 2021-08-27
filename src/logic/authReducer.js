const initial = { error: null };

const authReducer = (state = initial, action) => {
  switch (action.type) {
    case 'SIGNIN':
      console.log('signin');
      return { ...state, error: null };
    case 'ERROR':
      console.log(action.err);
      return { ...state, error: 'failed' };
    default:
      return state;
  }
};

export default authReducer;
