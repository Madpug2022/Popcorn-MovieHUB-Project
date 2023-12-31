import { styled, keyframes } from "styled-components";
import { PiMagnifyingGlassFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import react, { useState } from "react";

const openAnimation = keyframes`
    0% { opacity: 0 }
    25% { opacity: 25% }
    50% { opacity: 50% }
    100% { opacity: 100% }
`

const StyledSearchBar = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    border: none;
    width: 100%;
    cursor: pointer;
    z-index: 5;
    position: absolute;
    right: -35px;
    background-color: #f1f1f1;
    animation: ${openAnimation} 0.5s forwards ;

`
const StyledForm = styled.form`
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    position: relative;

    button {
        cursor: pointer;
        border: none;
        background: none;
        font-size: 18px;
        width: 34px;
        position: absolute;
        right: 0;
    }
`
const StyledInput = styled.input`
width: 50vh;

`


const SearchInput = (props: any) => {
    const { setNotOnMain } = props;
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event: react.FormEvent) => {
        event.preventDefault();
        navigate('/searchPage', { state: { searchQuery } })
    }
    return (
        <StyledSearchBar>
            <StyledForm onSubmit={handleSubmit}>
                <StyledInput placeholder="Search user" value={searchQuery} onChange={(event) => setSearchQuery(event?.target.value)} />
                <button type="submit" onClick={setNotOnMain(true)}>
                    <PiMagnifyingGlassFill />
                </button>
            </StyledForm>
        </StyledSearchBar>
    )
}
export default SearchInput
