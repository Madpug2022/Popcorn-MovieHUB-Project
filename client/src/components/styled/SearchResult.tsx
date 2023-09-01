import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/resources/Logo Popcorn.jpg'

const StyledResult = styled.div`
    border: 3px solid #f1f1f1;
    border-radius: 15px;
    background-color: lightgray;
    padding: 0.5em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: black;
    height: 40vh;
    width: 30vw;
    .sr-left{
        margin: auto 2vh;
    }
    .sr-left img{
        height: 18vh;
        width: 30vw;
        border-radius: 25px;
        border: 5px solid lightcyan;
    }
    .sr-rigth {
        display: flex;
        flex-direction: column;
        margin-bottom: auto;
    }
    .sr-rigth img {
        transform: scale(0.6);
    }
    .sr-rigth button {
        border: none;
        cursor: pointer;
        background: none;
        margin-top: 20px;
        font-size:18px;
        font-weight: 800;
        color: #79110F;
        transition-duration: 300ms;
    }
    .sr-rigth button:hover {
        color: #C41C19;
    }
`

const SearchResult = (props: any) => {
    const { userLogo, nickName, series, movies } = props;
    const navigate = useNavigate();

    const toProfile = () => {
        navigate(`/search/${nickName}`)
    }
    return (
        <StyledResult>
            <div className="sr-left">
                <img src={userLogo} alt="User logo" />
            </div>
            <div className="sr-rigth">
                <img src={logo} alt="Popcorn logo" />
                <h2>User Credential</h2>
                <p><b>Nickname: </b>{nickName}</p>
                <p><b>Movies reviews: </b>{movies.length}</p>
                <p><b>Series revies: </b>{series.length}</p>
                <button onClick={() => toProfile()}>See the user profile</button>
            </div>
        </StyledResult>
    )
}

export default SearchResult
