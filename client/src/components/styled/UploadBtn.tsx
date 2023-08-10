import { styled } from "styled-components";

const UploadBtn = styled.button`
    margin: 2vh auto;
    text-transform:uppercase;
    padding: 1vh 3vw;
    box-shadow: 0 0 20px #000;
    color: #f1f1f1;
    background-color: #79110F;
    font-size: 16px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    transition-duration: 1s;
    &:hover {
        box-shadow: 0 0 0px #000;
        background-color: #c41c19;
    }
`
export default UploadBtn
