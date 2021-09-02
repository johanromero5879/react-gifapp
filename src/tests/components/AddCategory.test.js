import { shallow } from 'enzyme'

import AddCategory from '../../components/AddCategory'

describe('Testing on <AddCategory />', () => {
    const setCategories = jest.fn()

    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> )

    beforeEach( () => {
        jest.clearAllMocks() //clear all simulations 
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> )
    } )

    test('should show correclty', () => {
        expect( wrapper ).toMatchSnapshot()    
    })
    
    test('should change text input', () => {
        const input = wrapper.find('input')
        const value = 'cute anime'

        input.simulate('change', { target: { value } })

        const p = wrapper.find('p')

        expect( p.text().trim() ).toBe( value )
    })
    
    test('should not post info with submit', () => {
        const form = wrapper.find('form')

        form.simulate('submit', { preventDefault(){} })

        expect( setCategories ).not.toHaveBeenCalled()
    })

    test('should call setCategories and clear input box', () => {
        const input = wrapper.find('input')
        let value = 'love anime'

        // Simulate inputChange
        input.simulate('change', { target: { value } })

        // Simulate submit
        const form = wrapper.find('form')
        form.simulate('submit', { preventDefault(){} })

        // Check if setCategories was called
        expect( setCategories ).toHaveBeenCalled()
        expect( setCategories ).toHaveBeenCalledTimes(1)
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) )


        // Chek if input is empty
        expect( input.prop('value') ).toBe( '' )
    })
})