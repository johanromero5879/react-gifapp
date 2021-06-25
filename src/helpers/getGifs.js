import { http } from './utils'

export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=4MXpeLR2CbXSHzLY33JChUYlJCmRPIpx`

    const { data } = await http(url)

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }))

    return gifs
}