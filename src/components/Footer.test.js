
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer'


Enzyme.configure({ adapter: new Adapter() })

describe('When App loads', () => {
  let renderedfooter;
  beforeEach(() => {
    renderedfooter = shallow(<Footer />);
  });
  it('shows Footer', () => {
    const div= renderedfooter.find('div');
    expect(div.length).toEqual(1)
  })
})
