const initial = { notes: [] };

const noteReducer = (state = initial, action) => {
  switch (action.type) {
    case 'CREATE_SUCCESS':
      console.log(action.data);
      return state;
    case 'CREATE_ERROR':
      console.log(action.err);
      return state;
    case 'UPDATE_SUCCESS':
      console.log(action.data);
      return state;
    case 'UPDATE_ERROR':
      console.log(action.err);
      return state;
    case 'REMOVE_SUCCESS':
      console.log(action.id);
      return state;
    case 'REMOVE_ERROR':
      console.log(action.err);
      return state;
    default: return state;
  }
};

export default noteReducer;
