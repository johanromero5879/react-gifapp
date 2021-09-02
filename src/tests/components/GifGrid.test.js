import { shallow } from 'enzyme'

import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs') //falsificar useFetchGifs

describe('Testing with <GifGrid />', () => {
    const category = 'hug anime'
        
    // beforeEach( () => {
    //     jest.clearAllMocks()
    //     wrapper = shallow( <GifGrid category={ category } /> )
    // } )
        

    test('should render correctly', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow( <GifGrid category={ category } /> )
        expect( wrapper ).toMatchSnapshot()
    })
    
    test('should show items whe images are loading with useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: 'ABCa',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow( <GifGrid category={ category } /> )

        // expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('p').exists() ).toBe( false )
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )
    })
})