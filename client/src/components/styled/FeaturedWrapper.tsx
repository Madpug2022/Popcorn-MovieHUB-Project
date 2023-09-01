import styled from 'styled-components';

const FeaturedWrapper = styled.section<{ background: string }>`

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    overflow-x: hidden;

    &::before{
        content: ' ';
        z-index: -1;
        position: absolute;
        background-image: url(${props => props.background});
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        filter: brightness(50%);
    }

    img:nth-of-type(1) {
        height: 16vh;
        padding: 3vh;
        border-bottom: 1px solid gray;
    }
    h1{
        text-shadow: 0 0 40px #000;
        font-size: 28px;
        margin-top: 10vh;
    }
    h3{
        margin-top: 1vh;
        text-shadow: 0 0 40px #000;
        text-align: center;
    }
    button{
        text-transform:uppercase;
        margin-top: 8vh;
        padding: 1.5vh 3vw;
        box-shadow: 0 0 20px #000;
        color: #f1f1f1;
        background-color: #79110F;
        border: none;
        cursor: pointer;
        font-weight: 700;
        transition-duration: 1s;
    }
    button:hover {
        box-shadow: 0 0 0px #000;
        background-color: #c41c19;
    }
    p{
        position: relative;
        margin-top: 5vh;
        color: #FdFFFF;
        text-shadow: 0 0 20px #000;
    }
    p::before{
        content: ' ';
        position: absolute;
        background-color: #FdFFFF;
        height: 1px;
        width: 50%;
        left: -105px;
        top: 50%;
    }
    p::after{
        content: ' ';
        position: absolute;
        background-color: #FdFFFF;
        height: 1px;
        width: 50%;
        left: 205px;
        top: 50%;
    }
    div{
        display: flex;
    }
    @media (max-width: 768px) {
       h1{
        font-size: 1.5em;
        text-align:center;

       }
       h3{
        font-size: 1em;
       }
       img:nth-of-type(1) {
        height: 14vh;
        padding: 3vh;
        border-bottom: 1px solid gray;
    }
  }
`

export default FeaturedWrapper
