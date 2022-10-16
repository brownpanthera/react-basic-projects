import React, { useEffect, useState } from "react";
import axios from "axios";
// axios.get(baseURL).then((response)=> console.log(response.data));
function Anime() {
    function dataFetch() {
        const baseURL = "https://strangerthings-quotes.vercel.app/api/quotes/5";
        axios.get(baseURL).then((response) => {
            setAnime(response.data);
            console.log(response.data);
        });
    }
    const [anime, setAnime] = useState([]);

    console.log({anime})

    useEffect(() => {
        dataFetch();
    }, []);

    return (
        <div>
        {anime?.map((animeItem, index)=>{
            <div key={index}> 
                <h2>{animeItem.author}</h2>
                <h3>{anime.first}</h3>
                <button onClick={dataFetch}>Get Quote</button>
            </div>
        })}
        </div>
    );
}
export default Anime;

// // [{
//     id: 1,
//     strin: 'vd'
// }]

