import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CatEdit from './header'

Enzyme.configure({ adapter: new Adapter() })

describe('When App loads', () => {
  let renderedheader;
  beforeEach(() => {
    renderedheader = shallow(<CatEdit />);
  });
  it('shows Header', () => {
    const h1= renderedheader.find('h1');
    expect(h1.length).toEqual(1)
  })
})
