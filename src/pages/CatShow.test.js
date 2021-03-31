import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CatShow from './catShow'

Enzyme.configure({ adapter: new Adapter() })

describe('When App runs', () => {
  let renderedCatShow;
  beforeEach(() => {
    renderedCatShow = shallow(<CatShow />);
  });
  it('shows CatShow', () => {
    const h2 = renderedCatShow.find('h2');
    expect(h2.length).toEqual(1)
  })
})
