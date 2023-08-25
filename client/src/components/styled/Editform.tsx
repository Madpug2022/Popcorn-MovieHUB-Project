import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import editApi from "../../api/editApi";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";

const url = 'http://localhost:8800/movies';

interface FormData {
    name: string
    score: number
    review: string
    id: string
    setDetailsModal: (state: boolean) => void
    setEditFormOpen?: (state: boolean) => void
}
const StyledForm = styled.form`
    height: 90%;
    width: 90%;
    label {
        display:flex;
        align-items: center;
        font-weight: 600;
        text-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        margin-right:3px
    }
    input{
        border: none;
    }
    textarea{
        border: none;
    }
    button, .edit-btn-send{
        cursor: pointer;
        border: none;
        background: #79110F;
        width: 65px;
        color: #f1f1f1;
        padding: 2px;
        margin: auto;
        transition-duration: 500ms;
    }
    button:hover, .edit-btn-send:hover{
        background: #C41C19;
    }
    div:last-child{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`
const EditForm = (props: FormData) => {

    const { name, score, review, setEditFormOpen, id, setDetailsModal } = props
    const { formState: { errors }, register, handleSubmit } = useForm({ defaultValues: { name, score, review } })
    const { getAccessTokenSilently } = useAuth0()

    const onSubmit = async (data: any) => {
        setEditFormOpen!(false)
        setDetailsModal(false)
        await editApi(url, id, data, getAccessTokenSilently);
        toast.success('Movie edited successfully!')
    }

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <h2>Edit information</h2>
            <div>
                <label htmlFor="name">New Tittle</label>
                <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    {...register('name', {
                        maxLength: 100
                    })}
                />
                {errors.name?.type === 'maxLength' && <p>Field has to be maximum of 100 characters.</p>}
            </div>
            <div>
                <label htmlFor="score">New Score</label>
                <input
                    type="number"
                    id="score"
                    {...register('score', {
                        min: 1,
                        max: 10
                    })}
                />
                {errors.score?.type === 'min' && <p>Minimun score is 1</p>}
                {errors.score?.type === 'max' && <p>Maximun score is 10</p>}
            </div>
            <div>
                <label htmlFor="review">New Review</label>
                <textarea
                    id="review"
                    autoComplete="off"
                    {...register('review', {
                        maxLength: 2500
                    })}
                    rows={2}
                    cols={50}
                    style={{ resize: 'none' }}
                />
                {errors.review?.type === 'maxLength' && <p>Field has to be maximum of 2500 characters.</p>}
            </div>
            <div>
                <button onClick={() => setEditFormOpen!(false)}>Cancel</button>
                <input className='edit-btn-send' type="submit" value='Confirm' />
            </div>
        </StyledForm>
    )
}

export default EditForm
