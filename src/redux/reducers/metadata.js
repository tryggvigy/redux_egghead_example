export default function metadata(state = { name: 'foo' }, action) {
  switch (action.type) {
    case 'SET_META':
      return state;
    default:
      return state;
  }
}
