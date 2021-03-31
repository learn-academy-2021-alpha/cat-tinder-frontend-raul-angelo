import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './header'


Enzyme.configure({ adapter: new Adapter() })

describe('When App runs', () => {
  let renderedHeader;
  beforeEach(() => {
    renderedHeader = shallow(<Header />);
  });
  it('shows Header', () => {
    const h1 = renderedHeader.find('h1');
    expect(h1.length).toEqual(1)
  })
})
