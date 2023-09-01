import { styled } from "styled-components";
import { BsTrash } from "react-icons/bs";
import deleteApi from "../../api/deleteApi";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";

interface RecipeType {
    id?: string;
    name: string;
    image: string;
    image_id?: string;
    type: string;
    user: string;
    link: string;
    setLoading?: (state: boolean) => void;
    getData: () => void
}
const getColorByType = (type: string) => {
    switch (type) {
        case 'SWEET':
            return '#d42320';
        case 'SALTY':
            return '#87CEEB';
        case 'SOUR':
            return '#FFD700';
        case 'BITTER':
            return '#7A9D54';
        default:
            return '#ffffff';
    }
};
const StyledRecipeCard = styled.div<{ type: string }>`
    width: 100%;
    height: 40vh;
    background-color: ${({ type }) => getColorByType(type)};;
    display: grid;
    grid-template-rows: 10% 1fr 25% 10%;
    border-radius: 5px;

    .rc-type{
        color: #272727;
        font-size: 12px;
        font-weight: 600;
        text-transform: capitalize;
        font-style: italic;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .rc-top, .rc-mid, .rc-bot{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        overflow: hidden;
    }
    .rc-top{
        background-color: #000000;
        border-bottom: 1px solid #000000;
        border-top: 1px solid #000000;
    }
    .rc-mid p:nth-child(1) {
        font-size: 1rem;
        text-align: center;
        text-transform: uppercase;
        filter: invert(0) grayscale(1) contrast(9) drop-shadow(.05em .05em black);
    }
    .rc-mid p:nth-child(2){
        margin-top: 1px;
        font-size: 10px;
        color: lightgray;
    }
    .rc-bot a{
        text-decoration: none;
        color: #f1f1f1;
        transition-duration: 300ms;
    }
    .rc-bot a:hover{
        color: black;
        text-decoration:underline;
    }
    div:first-child{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    div:first-child button{
        position: absolute;
        left: 0;
        border: none;
        background: none;
        color: #f1f1f1;
        cursor: pointer;
    }
    div:first-child button:hover{
        color: black;
    }
`

const RecipeCard = (props: RecipeType) => {
    const url = `http://localhost:8800/recipes`
    const { id, type, image, name, user, link, getData } = props;
    const { getAccessTokenSilently, user: logedUser } = useAuth0()

    const handleDelete = async () => {
        toast.warning('Recipe removed successfully')
        await deleteApi(url, id, getAccessTokenSilently);

        getData();

    }

    return (
        <StyledRecipeCard type={type}>
            <div>
                <p className="rc-type">{`${type} recipe`}</p>
                {user == logedUser?.nickname ? <button onClick={() => handleDelete()}>
                    <BsTrash />
                </button> : <></>}</div>
            <div className="rc-top">
                <img src={image} alt="Banner for recipe" />
            </div>
            <div className="rc-mid">
                <p>{name}</p>
                <p>{`Uploaded by ${user}`}</p>
            </div>
            <div className="rc-bot">
                <a href={link} target="_blank">Go to the recipe website</a>
            </div>
        </StyledRecipeCard>
    )
}

export default RecipeCard
