import { styled } from "styled-components";
import { RxCross2, RxTrash, RxPencil2 } from "react-icons/rx";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, CSSProperties, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import EditForm from "./Editform";
import Notification from "./Notification";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};


const MDBakground = styled.div`
position: absolute;
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content:center;
background: rgba(0, 0, 0, 0.38);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(15.2px);
-webkit-backdrop-filter: blur(15.2px);
`
const MDContainer = styled.div`
height: 60vh;
width: 45vw;
display: grid;
grid-template-rows: 10% 90%;
background-color: transparent;
border-radius: 10px;


transition-duration: 600ms;
    &:hover{
        background-color: #f1f1f177;
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    }
    .MD-top{
        display: flex;
        position: relative;
        flex-direction: row;
        align-items:center;
        justify-content: flex-end;
        padding-right:1vh;
    }
    .MD-buttons{
        margin: 0 2px;
        padding: 3px;
        border: none;
        color: #ffffff;
        transition-duration: 300ms;
        background-color: transparent;
        cursor: pointer;
    }
    .MD-buttons:hover{
        color: black;
        text-shadow: 0 0 40px rgba(255, 255, 255)
    }
`
const ReviewInfo = styled.div<{ background: string, score: string }>`
    display: grid;
        grid-template-columns: 60% 40%;
        .left{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1vh;

        }
        .MD-info{
            color: black;
            border-radius: 5px;
            height: auto;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content:center;
            align-items:center;
            padding: 1vh 0;
            margin-bottom:1vh;
            background-color: #f1f1f1;
            box-shadow: 0 0 40px rgba(0,0,0,0.5)
        }
        .MD-info h2{
            border-bottom: 2px solid #c3c3c3;
            margin-bottom: 1vh;
            width: 90%;
            font-size: 26px;
            text-align: center;
        }
        .MD-info div {
            display: grid;
            width: 100%;
            grid-template-columns: 5rem auto;
            grid-template-rows: repeat(2, auto);
            margin-bottom:1vh;
        }
        .MD-info div p:first-child{
            grid-row: 1/3;
            height: 3rem;
            width: 3rem;
            display: flex;
            justify-content: center;
            align-items:center;
            margin-left: 1rem;
            font-size:22px;
            font-weight: 900;
            background-color: ${props => (+props.score >= 8) ? "#57e32c" : (+props.score >= 5) ? '#ffe234' : '#ff4545'};
            border-radius: 55%
        }
        .MD-info div p:nth-child(2){
            font-style: oblique;
            padding-top:2px;
        }
        .MD-info div p:nth-child(3){
            font-size:12px;
            color: gray;
            font-style: italic;
        }
        .right{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 95%;
            width: 95%;
        }
        .right .cover{
            height: 100%;
            width: 100%;
            background-image: url(${props => props.background});
            background-size: contain;
            background-repeat: no-repeat;
            background-position:center;
            background-color: rgba(0,0,0,0.5);
        }
`
interface MovieDetails {
    setDetailsModal: (state: boolean) => void;
    movieData: any;
    modalData: string;
}

const MovieDetailsModal = (props: MovieDetails) => {
    const { setDetailsModal, movieData, modalData } = props;
    const { user } = useAuth0();
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [editFormOpen, setEditFormOpen] = useState(false);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false)
        return (() => setLoading(true));
    }, [movieData])
    return (
        <MDBakground>
            <MDContainer>
                <div className="MD-top">
                    {modalData !== 'All' ? <><button className="MD-buttons" title="Edit" onClick={() => setEditFormOpen(!editFormOpen)}><RxPencil2 /></button>
                        <button className="MD-buttons" onClick={() => setConfirmDelete(true)} title="Delete"><RxTrash /></button></> : <></>}
                    {confirmDelete && <Notification modalData={modalData} setLoading={setLoading} setDetailsModal={setDetailsModal} setConfirmDelete={setConfirmDelete} id={movieData.id} />}
                    <button className="MD-buttons" title="Close" onClick={() => setDetailsModal(false)}><RxCross2 /></button>
                </div>
                <ReviewInfo background={movieData.poster_img} score={movieData.score}>
                    <div className="left">

                        {loading ? (<ClipLoader
                            color={'#f1f1f1'}
                            loading={loading}
                            cssOverride={override}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />) : editFormOpen ?
                            (<section className="MD-info">
                                <EditForm name={movieData.name} modalData={modalData} setDetailsModal={setDetailsModal} score={movieData.score} review={movieData.critique} id={movieData.id} setEditFormOpen={setEditFormOpen} />
                            </section>) :
                            (<section className="MD-info">
                                <h2>User Review</h2>
                                <div>
                                    <p>{movieData.score}</p>
                                    <p>{user?.nickname}</p>
                                    <p>{movieData.name}</p>
                                </div>
                                <p>{movieData.critique}</p>
                            </section>)}
                    </div>
                    <div className="right">
                        <div className="cover" />
                    </div>
                </ReviewInfo>
            </MDContainer>
        </MDBakground>
    )
}

export default MovieDetailsModal
