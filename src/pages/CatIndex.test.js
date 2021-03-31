import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CatIndex from './catIndex'

Enzyme.configure({ adapter: new Adapter() })

describe('When App runs', () => {
  let renderedCatIndex;
  beforeEach(() => {
    renderedCatIndex = shallow(<CatIndex />);
  });
  it('shows CatIndex', () => {
    const h2 = renderedCatIndex.find('h2');
    expect(h2.length).toEqual(1)
  })
})
