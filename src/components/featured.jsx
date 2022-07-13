import { useEffect, useState } from "react";
import styled from 'styled-components';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';




function Featured() {
    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        getFeaturedRecipe();
    }, []);

    const getFeaturedRecipe = async () => {
        const URL = `${process.env.REACT_APP_RECIPE_URL}/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5`;
        const result = await fetch(URL);
        const data = await result.json();
        console.log(data);
        setFeatured(data.recipes);
    }



    return (
        <div>
            <Splide options={{
                perPage: 4
            }}>
                {
                    featured.map((recipe, index) => {
                        return (
                            <SplideSlide>
                                <Container key={index}>
                                    <Card>
                                        <h1>{recipe.title}</h1>
                                        <img src={recipe.image} alt={recipe.title} />
                                    </Card>
                                </Container>
                            </SplideSlide>
                        )
                    })
                }
            </Splide>
        </div>
    )
}

const Container = styled.div`
    margin: 1em;
    padding: 1em;
    border-radius: 6px;
`

const Card = styled.div`
    min-height: 25rem;
    margin: 2em;
    overflow: hidden;
    img{
        border-radius: 6px;
    }
    h1{
        font-size: 1em;
    }
`

export default Featured;