const initial = {
  notes: [
    { id: 1, title: 'Example Note', content: 'Lorem ipsum dolor sit amet' },
    { id: 2, title: 'Example Note', content: 'Lorem ipsum dolor sit amet' },
  ]
};

const noteReducer = (state = initial, action) => {
  switch (action.type) {
    case 'CREATE':
      console.log(action.data);
      return state;
    case 'ERROR':
      console.log(action.err);
      return state;
    default:
      return state;
  }
};

export default noteReducer;
