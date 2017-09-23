import * as React from 'react'
import { mount } from 'enzyme'
import { Button } from '../../../src/Common/index'

describe('Button' , () => {
    it('it renders button ' , () => {
        const wrapper = mount(<Button label='test'/>)
          expect(wrapper).toHaveLength(1)
    })

    it('it match with snapshot' , () => {
        const wrapper = mount(<Button label='test'/>)
        expect(wrapper).toMatchSnapshot()
    })
})

