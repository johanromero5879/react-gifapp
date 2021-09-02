import { shallow } from 'enzyme'
import GifGridItem from '../../components/GifGridItem'

describe('Testing with <GifGridItem />', () => {
    const title = "A title"
    const url = "https://i.pinimg.com/originals/1c/4f/4c/1c4f4c7010a0b7ca14e32baa83fe2181.jpg"
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> )

    test('should render correclty', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    test('should have a paragraph with title ', () => {
        const p = wrapper.find('p')

        expect( p.text().trim() ).toBe( title )
    })

    test('should have a image equal to url and alt from props ', () => {
        const img = wrapper.find('img')
        
        expect( img.prop('src') ).toBe( url )
        expect( img.prop('alt') ).toBe( title )
    })

    test('should have class animate__fadeIn', () => {
        const div = wrapper.find('div')

        expect( div.hasClass('animate__fadeIn') ).toBe( true )
    })
    
    
})