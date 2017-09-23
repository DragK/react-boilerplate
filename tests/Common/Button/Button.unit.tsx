import * as React from 'react'
import { mount } from 'enzyme'
import { Button } from 'Common'



describe("Button" , () => {
    it("it renders button" , () => {
        const wrapper = mount(<Button />);
          expect(wrapper).toMatchSnapshot();
    })
})

