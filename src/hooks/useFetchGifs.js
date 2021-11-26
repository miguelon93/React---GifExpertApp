import { useEffect, useState } from 'react'
import getGifs from '../helpers/getGifs';

const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifs(category)
            .then(gifs => {

                setTimeout(() => {

                    console.log(gifs);
                    setState({
                        data:gifs,
                        loading:false,
                    });

                },3000);

            })

    },[category])

    return state; // {data: [], loading: true}

}

export default useFetchGifs

