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
      console.info('LOAD_DATA_SUCCESS');
      return {
        ...state,
        count: action.data.count,
        next: action.data.next,
        results: action.data.results
      };
    case 'LOAD_DATA_FAILURE':
      break;
    default:
      return state;
  }
};

export default swData;
