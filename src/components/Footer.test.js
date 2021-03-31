import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'

Enzyme.configure({ adapter: new Adapter() })

  describe("when Footer loads", () => {
  it("displays 'Footer'", () => {
    const footer = shallow(<Footer />)
    expect(footer.find('p').toEqual('Footer')
  )
})
