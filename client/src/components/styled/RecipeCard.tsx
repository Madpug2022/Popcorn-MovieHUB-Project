import { styled } from "styled-components";

interface RecipeType {
    id?: string;
    name: string;
    image: string;
    image_id?: string;
    type: string;
    user: string;
    link: string;
}

const StyledRecipeCard = styled.div`
    width: 100%;
    height: 40vh;
    background-color: #ffffff;
    display: grid;
    grid-template-rows: 10% 1fr 30% 10%;

`

const RecipeCard = (props: RecipeType) => {

    return (
        <StyledRecipeCard>
            <p>1</p>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </StyledRecipeCard>
    )
}

export default RecipeCard
