import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        const fetchGifs = async () => {
            const gifs = await getGifs(category)
            setState({
                data: gifs,
                loading: false
            })
        }
        fetchGifs()
    }, [ category ])

    return state
}