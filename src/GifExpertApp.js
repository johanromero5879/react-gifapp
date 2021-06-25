import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    const [ categories, setCategories ] = useState(['Hi anime'])

    // const handleApp = () => {
    //     // setCategories( cats => [...cats, 'Kiss'] )
    //     setCategories([...categories, 'Kiss'])
        
    // }

    return <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories } />
        <hr />
        { 
            categories.map( (category, index) => (
                <GifGrid 
                    category={ category }
                    key={ index } 
                />
            ) )
        }
    </>
}

export default GifExpertApp