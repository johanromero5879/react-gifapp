import { shallow } from 'enzyme'

import GifExpertApp from '../GifExpertApp'

describe('Testing on <GifExpertApp />', () => {
    const categories = ['One punch', 'Kimetsu no Yaiba']

    test('should render properly', () => {
        const wrapper = shallow( <GifExpertApp /> )

        expect( wrapper ).toMatchSnapshot()
    })
    
    test('should show a categories list', () => {
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> )

        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('GifGrid').length ).toBe( categories.length )
    })
    
})