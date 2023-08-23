import { styled } from "styled-components";

const StyledNotification = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
        position: absolute;
        font-family: 'Roboto', sans-serif;
        display: grid;
        grid-template-rows: repeat(auto, 2);
        left: 50%;
        height: 10vh;
        bottom: -15px;
        width: 25vw;
        z-index:2;
        padding: 4px;
        transition-duration: 500ms;
        border: inset 2px #9312105e;
        background-color: #931210;
        box-shadow: 0 0 30px rgba(0,0,0,0.5);
        border-radius: 3px;
        &:hover{
            background-color: #da1c19;
        }
        span {
            text-align: center;
            text-transform: uppercase;
            pointer-events:none;
            text-shadow: 0 0 40px rgba(0, 0, 0, 2);
            filter: invert(0) grayscale(1) contrast(9) drop-shadow(.05em .05em black);
        }
        div {
            grid-row: 2;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
        }
        button {
            text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            border: none;
            width: 3vw;
            font-size:14px;
            cursor: pointer;
            box-shadow: 0 0 20 rgba(0,0,0,0.5);
            padding: 0.5vh;
            transition-duration: 300ms;
            background-color: #f1f1f1;
            border: 1px solid transparent;
        }
        button:hover {
            background-color: transparent;
            color: white;
            border: 1px solid white;
        }
`

const Notification = (props: any) => {
    const { setConfirmDelete } = props;
    return (
        <StyledNotification>
            <span>You want to remove this movie?</span>
            <div>
                <button>Yes</button>
                <button onClick={() => setConfirmDelete(false)}>No</button>
            </div>

        </StyledNotification>
    )
}

export default Notification
