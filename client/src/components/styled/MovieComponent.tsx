import { styled } from "styled-components";
import * as logos from "../../assets/resources/score logos/index"

interface MediaType {
    id: string
    name: string
    poster_img: string
    score: number
    genres: string[]
    user: string
}

const StyledCard = styled.div<{ background: string }>`
    height: 55vh;
    width: 25%;
    background-color: #000;
    position: relative;

    &::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${props => props.background});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom center;
    }
`
const CardInfo = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 25%;
    display: grid;
    grid-template-rows: 40% 60%;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    cursor: pointer;
        .top{
            display: flex;
            align-items: center;
            justify-content:center;
        }
        .top p {
            font-size: 20px;
            font-weight: bold;
            text-shadow: 0 0 40px rgba(0, 0, 0, 2)
        }
        .bottom {
            display: grid;
            grid-template-columns: 50% 50%;
        }
        .bottom .score-logo {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 8vh;
        }
        .bottom img {
            height: 100%;
            transform: rotate(10deg);
            overflow: hidden;
            box-shadow: 0 0 40px rgba(0, 0, 0, 0.1)
        }
        .score{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
        }
        .score span{
            text-shadow: 0 0 40px rgba(0, 0, 0, 2)
        }
        .score span:nth-child(1){
            font-size:40px;
            margin-right:8px;
        }
        .score span:nth-child(2){
            font-size:20px;
            text-decoration: underline;
        }
`

const MovieComponent = (props: MediaType) => {
    const { name, poster_img, score } = props

    return (
        <StyledCard background={poster_img}>
            <CardInfo>
                <div className="top"><p>{name}</p></div>
                <div className="bottom">
                    <div className="score">
                        <span>{score}</span><span> out of 10</span>
                    </div>
                    <div className="score-logo">
                        <img src={(score <= 5) ? logos.c3 : (score <= 8) ? logos.c4 : logos.c5} alt="Score_logo" />
                    </div>
                </div>
            </CardInfo>
        </StyledCard>
    )
}

export default MovieComponent