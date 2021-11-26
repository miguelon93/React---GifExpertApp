import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const {data:gifs, loading} = useFetchGifs(category);

    return (
        <>
        <h3>{category}</h3>

        {loading && <p>Loading...</p>}

         <div className="gif-grid">

            {
                gifs.map((gif) => (
                    <GifGridItem 
                        key={gif.id}
                        {...gif}
                    />
                ))
            }

        </div>
    
        </>
    )
}

export default GifGrid;

