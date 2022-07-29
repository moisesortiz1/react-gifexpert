import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Piece', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory,...categories]);
        // setCategories(cate => [...cat,'Naruto']);
    }

    return (
        <>
            {/* {Titulo} */}
            <h1>GifExpertApp</h1>

            {/* {Input} */}
            <AddCategory onNewCategory={(value)=> onAddCategory(value)}/>
            {/* {Listado de Gifs} */}
            

            {
                categories.map((category)=>(
                <GifGrid key={category} category={category}/>
                    )
                )
            }
            {/* <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol> */}
            {/* {Gif Item} */}

        </>
    )
}
