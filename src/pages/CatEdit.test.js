import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CatEdit from './catEdit'

Enzyme.configure({ adapter: new Adapter() })

describe('When App runs', () => {
  let renderedCatEdit;
  beforeEach(() => {
    renderedCatEdit = shallow(<CatEdit />);
  });
  it('shows CatEdit', () => {
    const div = renderedCatEdit.find('div');
    expect(div.length).toEqual(1)
  })
})
