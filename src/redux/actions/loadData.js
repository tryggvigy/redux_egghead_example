import fetch from 'isomorphic-fetch';

// action creator
export default function loadData() {
  // Redux Thunk handles these
  return dispatch => fetch(`http://swapi.co/api/people/?format=json`)
    .then(res => res.json())
    .then(
      data => {
        dispatch({ type: 'LOAD_DATA_SUCCESS', data });
      },
      err => dispatch({ type: 'LOAD_DATA_FAILURE', err })
    );
}
