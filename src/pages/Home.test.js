import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CatNew from './catNew'

Enzyme.configure({ adapter: new Adapter() })

describe('When App loads', () => {
  let renderedCatNew;
  beforeEach(() => {
    renderedCatNew = shallow(<CatNew />);
  });
  it('shows CatNew', () => {
    const div = renderedCatNew.find('div');
    expect(div.length).toEqual(1)
  })
})
