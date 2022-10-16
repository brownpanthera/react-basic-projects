import React, { useEffect, useState } from "react";
import axios from "axios";
// axios.get(baseURL).then((response)=> console.log(response.data));
function Anime() {
    function dataFetch() {
        const baseURL = "https://x-math.herokuapp.com/api/random";
        axios.get(baseURL).then((response) => {
            setAnime(response.data);
            console.log(response.data);
        });
    }
    const [anime, setAnime] = useState([]);
    useEffect(() => {
        dataFetch();
    }, []);
    return (
        <div>
            <h2>{anime.expression}</h2>
            <button onClick={dataFetch}>Get Quote</button>
        </div>
    );
}
export default Anime;