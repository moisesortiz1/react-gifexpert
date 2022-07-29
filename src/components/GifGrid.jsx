
// Gf4f2pjzt9MXIWjYT8YduZdEWrXEDoZ5
// api.giphy.com/v1/gifs/search?api_key

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
    
    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
           { isLoading && <h2>Cargando</h2> }
            <div className="card-grid">
                {
                images.map((image) => (
                    <GifItem key={image.id} {...image}/>
                ))}
            </div>
        </>
    )
}
