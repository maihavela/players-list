import React from 'react';
import Title from './Title';
import { shallow } from 'enzyme';

describe('Title', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Title title="Test Title"/>);
  });

  describe('render component', () => {
    let h2;

    beforeEach(() => {
      h2 = wrapper.find('h2');
    });

    it('should render a h2 component', () => {
      expect(h2).toHaveLength(1);
    });

    describe('h2 text', () => {
      let text;

      beforeEach(() => {
        text = h2.text();
      });

      it('should have Test Title as text', () => {
        expect(text).toEqual('Test Title');
      });
    });
  })
});