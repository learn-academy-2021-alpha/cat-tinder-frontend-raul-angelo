import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from './NotFound'

Enzyme.configure({ adapter: new Adapter() })

describe('When App loads', () => {
  let renderedNotFound;
  beforeEach(() => {
    renderedNotFound = shallow(<NotFound />);
  });
  it('shows Not Found', () => {
    const div = renderedNotFound.find('div');
    expect(div.length).toEqual(1)
  })
})
