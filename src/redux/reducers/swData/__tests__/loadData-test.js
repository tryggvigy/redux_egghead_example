import loadData from '../../../actions/loadData';
import swData from '../';

import expect from 'expect';
import deepFreeze from 'deep-freeze';


describe('loadData action on swData reducer', () => {
  it('should fetch swapi data', () => {
    const stateBefore = {};
    const stateAfter = { data: 1 };
    // make sure our reducer is a pure function.
    deepFreeze(stateBefore);
    deepFreeze(stateAfter);
    expect(
    swData(stateBefore, loadData())
    ).toEqual(stateAfter);
  });
});
