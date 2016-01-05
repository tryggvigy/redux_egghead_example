import swData from '../';

import expect from 'expect';
import deepFreeze from 'deep-freeze';

describe('reducer', () => {
  describe('swData', () => {
    it('should construct state in correct way', () => {
      const stateBefore = {
        count: 0,
        next: '',
        results: []
      };
      const stateAfter = {
        count: 3,
        next: 'http://foo.bar/',
        results: [{ one: 1 }, { two: 2 }, { three: 3 }]
      };
      const action = {
        type: 'LOAD_DATA_SUCCESS',
        data: {
          count: 3,
          next: 'http://foo.bar/',
          results: [{ one: 1 }, { two: 2 }, { three: 3 }]
        }
      };
      // make sure our reducer is a pure function.
      deepFreeze(stateBefore);
      deepFreeze(stateAfter);
      expect(
      swData(stateBefore, action)
      ).toEqual(stateAfter);
    });
  });
});
