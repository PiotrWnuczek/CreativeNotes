const initial = {
  notes: [
    { id: 1, title: 'Example Note', content: 'Lorem ipsum' },
    { id: 2, title: 'Example Note', content: 'Lorem ipsum' },
  ]
};

const noteReducer = (state = initial, action) => {
  switch (action.type) {
    case 'CREATE_SUCCESS':
      console.log(action.data);
      return state;
    case 'CREATE_ERROR':
      console.log(action.err);
      return state;
    default:
      return state;
  }
};

export default noteReducer;
