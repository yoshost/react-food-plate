import { useEffect, useState } from "react";


function Featured(){
    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        getFeaturedRecipe();
    },[]);

    const getFeaturedRecipe = async () => {
        const URL = `${process.env.REACT_APP_RECIPE_URL}/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5`;
        const result = await fetch(URL);
        const data = await result.json();
        console.log(data);
        setFeatured(data.recipes);
    }

    

    return(
        <div>
            {
                featured.map((recipe, index) => {
                    return (
                        <div key={index}>
                            <h1>{recipe.title}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Featured;