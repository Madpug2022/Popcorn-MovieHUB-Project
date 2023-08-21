import { styled } from "styled-components";
import background from '../../assets/resources/film-movie-filmmaker-movie-director-wallpaper-7980187d710a0dbbd6e768ef7001360d.jpg'
import { useState, useEffect, useRef } from "react";
import preview from '../../assets/resources/popcorn-ico.jpg'
import { useAuth0 } from "@auth0/auth0-react";
import postMovieApi from "../../api/postMovieApi";



const ModalSection = styled.section`

background-color: white;
display: flex;
align-items: center;
justify-content:center;
height:55vh;
width:70%;
position: absolute;
top: 15%;
left: 15%;
background-image:url(${background});
background-size: cover;
background-repeat: no-repeat;
-webkit-box-shadow: 0px 0px 46px -5px rgba(255,255,255,0.51);
-moz-box-shadow: 0px 0px 46px -5px rgba(255,255,255,0.51);
box-shadow: 0px 0px 46px -5px rgba(255,255,255,0.51);
border-radius: 12px;
`;
const ModalContainer = styled.div`
padding: 10px;
margin: 5px;
height: 50vh;
width: 95%;
background: rgba(255, 255, 255, 0.05);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.1);
display: grid;
grid-template-columns: 65% 35%;
    .modal-cont-rigth {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 47vh;
        img{
            height: 100%;
            box-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
            object-fit: contain;
            overflow: hidden;
        }
    }
    .modal-cont-left{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        color: #ffffff;
        -webkit-text-stroke-width: 0.2px;
        -webkit-text-stroke-color: black;
        text-shadow: 0 0 20px black;
        label{
            margin-right: 5px;
            filter: invert(0) grayscale(1) contrast(9) drop-shadow(.05em .05em black);
        }
        h2, span {
            filter: invert(0) grayscale(1) contrast(9) drop-shadow(.05em .05em black);
        }
        input, select {
            border: none;
        }
        textarea{
            resize: none;
        }
        div{
            margin: 1vh auto;
            position: relative;
        }
        .errorMsg{
            position: absolute;
            background-color: #c41c19;
            top: 30px;
            right: 55px;
            z-index: 1;
            padding: 2px 5px;
        }
        .errorMsgReview{
            position: absolute;
            background-color: #c41c19;
            top: 80px;
            right: 55px;
            z-index: 1;
            padding: 2px 5px;
        }
        .scoreErrorMsg{
            position: absolute;
            background-color: #c41c19;
            top: 35px;
            left: 55px;
            z-index: 1;
            padding: 2px 5px;
        }
        .scoreErrorMsg::before{
            position: absolute;
            content: '';
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 11px solid #c41c19;
            z-index: 1;
            left: 0;
            top: -10px;
        }

        .offscreen{
            display:none;
        }

        .errorMsg::before, .errorMsgReview::before {
            position: absolute;
            content: '';
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 11px solid #c41c19;
            z-index: 1;
            right: 0;
            top: -10px;
        }
        .submit-btn{
            border: none;
            padding: 2px 12px;
            margin-left: 40%;
            background-color:#f1f1f1;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            font-size:16px;
            color: black;
            text-transform: uppercase;
            transition-duration:500ms;
            cursor:pointer;
        }
        .submit-btn:hover{
            background-color: #c41c19;
            color: #f1f1f1;
        }
        .submit-btn:disabled, .submit-btn[disabled] {
            color: lightgray;
            cursor: none;
            opacity: 0.5;
            pointer-events: none;
        }
    }
`
interface MovieReview {
    userEmail?: string;
    name: string;
    score: number;
    review: string;
    genres: string;
    posterImage: File | null;
}
interface GenreType {
    id: string;
    name: string;
    moviesId?: string[]
}

const MediaModal = (props: any) => {

    const { user, getAccessTokenSilently } = useAuth0();

    const { genresOptions, modalData, setModalOpen } = props;

    const [formData, setFormData] = useState<MovieReview>({
        userEmail: user?.email,
        name: '',
        score: 1,
        review: '',
        genres: '',
        posterImage: null,
    });
    const [imgPreview, setImgPreview] = useState(preview)
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        if (selectedFile) {
            setFormData((prevData) => ({
                ...prevData,
                posterImage: selectedFile,
            }));
            const reader = new FileReader();
            reader.onload = () => {
                setImgPreview(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        postMovieApi(`http://localhost:8800/${modalData}`, formData, getAccessTokenSilently);
        setModalOpen(false)
    };

    const nameRef = useRef<any>();

    const [validName, setValidName] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);

    const [validReview, setValidReview] = useState(false);
    const [reviewFocus, setReviewFocus] = useState(false);

    const [scoreFocus, setScoreFocus] = useState(false);

    useEffect(() => {
        nameRef.current.focus();
    }, [])
    useEffect(() => {
        if (formData.name == '' || formData.name == ' ') {
            setValidName(false);
        } else setValidName(true);
        if (formData.review == '' || formData.review == ' ') {
            setValidReview(false);
        } else setValidReview(true);
        if (formData.score < 1) {
            setFormData((prevData) => ({
                ...prevData,
                score: 1,
            }));
        } else if (formData.score > 10) {
            setFormData((prevData) => ({
                ...prevData,
                score: 10,
            }));
        }
    }, [formData.name, formData.review, formData.score]);

    let modalRef = useRef<HTMLDivElement>(null);

    return (
        <ModalSection>
            <ModalContainer ref={modalRef}>
                <div className="modal-cont-left">
                    <h2>What we watching today?</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <p className={nameFocus || validName ? "offscreen" : "errorMsg"}>This field is required and max length is 100 characters</p>
                            <label htmlFor="name">Tittle</label>
                            <input
                                style={{ width: '80%' }}
                                type="text"
                                id="name"
                                name="name"
                                maxLength={100}
                                autoComplete="off"
                                ref={nameRef}
                                onFocus={() => setNameFocus(true)}
                                onBlur={() => setNameFocus(false)}
                                value={formData.name}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div>
                            <label htmlFor="score">Score</label>
                            <input
                                type="number"
                                id="score"
                                name="score"
                                min="1"
                                max="10"
                                onFocus={() => setScoreFocus(true)}
                                onBlur={() => setScoreFocus(false)}
                                value={formData.score}
                                onChange={handleInputChange}
                                required />
                            <p className={!scoreFocus ? "offscreen" : "scoreErrorMsg"}>The score should be between 1 and 10</p>
                            <span> Out of 10!</span>
                        </div>
                        <div>
                            <label htmlFor="posterImage">Cover:</label>
                            <input type="file" id="posterImage" name="posterImage" accept="image/*" onChange={handleImageChange} required />
                        </div>
                        <div>
                            <label htmlFor="review">Review</label>
                            <textarea
                                id="review"
                                name="review"
                                autoComplete="off"
                                onFocus={() => setReviewFocus(true)}
                                onBlur={() => setReviewFocus(false)}
                                maxLength={2500}
                                rows={2}
                                cols={50}
                                value={formData.review}
                                onChange={handleInputChange}
                                required />
                            <p className={reviewFocus || validReview ? "offscreen" : "errorMsgReview"}>This field is required and max length is 2500 characters</p>
                        </div>
                        <div>
                            <label htmlFor="genres">Genre</label>
                            <select id="genres" name="genres" value={formData.genres} onChange={handleInputChange} required>
                                <option value="" disabled>Select a genre</option>
                                {genresOptions.map((genre: GenreType) => (
                                    <option key={genre.id} value={genre.name}>{genre.name}</option>
                                ))}
                            </select>
                        </div>

                        <input disabled={formData.genres === '' || formData.posterImage === null || validName == false ? true : false} className="submit-btn" type="submit" value="Submit" />
                    </form>
                </div>
                <div className="modal-cont-rigth">
                    <img src={imgPreview} alt="Preview img" />
                </div>
            </ModalContainer>
        </ModalSection>
    )
}

export default MediaModal
