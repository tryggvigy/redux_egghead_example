import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Header from '../';

function setup() {
  const props = {};
  const renderer = TestUtils.createRenderer();
  renderer.render(<Header {...props} />);
  const output = renderer.getRenderOutput();
  return {
    props,
    output,
    renderer
  };
}

describe('component', () => {
  describe('Header', () => {
    it('should render correctly', () => {
      const { output } = setup();

      expect(output.type).toBe('header');
      expect(output.props.className).toBe('Header');

      const [h1] = output.props.children;

      expect(h1.type).toBe('h1');
      expect(h1.props.className).toBe('Header__title');
    });
  });
});
