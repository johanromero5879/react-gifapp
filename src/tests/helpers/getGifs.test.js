import { getGifs } from '../../helpers/getGifs'

describe('Testing with getGifs fetch', () => {
    test('should bring back 10 elements', async () => {
        const gifs = await getGifs('One Punch')
        
        expect( gifs.length ).toBe( 10 )
    })

    test('should bring back 0 elements', async () => {
        const gifs = await getGifs('')
        
        expect( gifs.length ).toBe( 0 )
    })
    
})