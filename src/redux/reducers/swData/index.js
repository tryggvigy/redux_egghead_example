const swData = (
  state = {
    count: 0,
    next: '',
    results: []
  },
  action
) => {
  switch (action.type) {
    case 'LOAD_DATA_SUCCESS':
      return {
        ...state,
        count: action.data.count,
        next: action.data.next,
        results: action.data.results
      };
    case 'LOAD_DATA_FAILURE':
      return new Error(action.err);
    default:
      return state;
  }
};

export default swData;
