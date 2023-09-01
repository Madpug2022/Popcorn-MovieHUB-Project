import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import postRecipeApi from "../../api/postRecipeApi";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";

const StyledSection = styled.section`
 background-color: #79110F;
 display: flex;
 align-items: center;
 justify-content:center;
 padding: 0.5em;
 box-shadow: 0 0 20px #f1f1f135;
 height: 40vh;
 width: 40vw;
 form{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: space-between;
 }
 form h2{
    text-align: center;
 }
 form input {
    width: 80%;
    border: 1px solid #c02826
 }
 .edit-btn-send{
    width: 100%;
    background: none;
    color: #fff;
    border: none;
    transition-duration: 300ms;
    cursor: pointer;
 }
 .edit-btn-send:hover{
    background: #f1f1f1;
    color: black;
 }
`

const RecipeModal = (props: any) => {
    const { setOpenModal, getData } = props;
    const url = `http://localhost:8800/recipes`
    const { register, handleSubmit } = useForm()
    const { user, getAccessTokenSilently } = useAuth0()
    const onSubmit = async (data: any) => {
        if (user) {
            toast.success('Recipe added sucessfully');
            await postRecipeApi(url, data, user.email, getAccessTokenSilently)
            setOpenModal(false);
            getData();

        } else return
    }
    return (
        <StyledSection>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Upload a Recipe</h2>
                <div>
                    <label htmlFor="name">Recipe Name: </label>
                    <input
                        type="text"
                        id="name"
                        autoComplete="off"
                        {...register('name', {
                            maxLength: 50,
                            required: true
                        })}
                    />
                </div>
                <div>
                    <label htmlFor="type">Type: </label>
                    <select {...register('type', { required: true })}>
                        <option value="SALTY">SALTY</option>
                        <option value="SWEET">SWEET</option>
                        <option value="SOUR">SOUR</option>
                        <option value="BITTER">BITTER</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="link">Recipe Link: </label>
                    <input
                        id="link"
                        autoComplete="off"
                        {...register('link', {
                            required: true
                        })}
                    />
                </div>
                <div>
                    <label htmlFor="imageLink">Image Link: </label>
                    <input
                        id="imageLink"
                        autoComplete="off"
                        {...register('imageLink', {
                            required: true
                        })}
                    />
                </div>
                <div>
                    <input className='edit-btn-send' type="submit" value='Confirm' />
                </div>
            </form>
        </StyledSection>
    )

}
export default RecipeModal
