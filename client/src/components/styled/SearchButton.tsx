import { PiMagnifyingGlassFill } from "react-icons/pi";
import { styled } from "styled-components";
import { useState } from "react";
import SearchInput from "./SearchInput";

const StyledSBtn = styled.button<{ open: boolean }>`
    background:none;
    border: ${(props) => (props.open ? '2px solid black' : 'none')};
    color: ${(props) => (props.open ? 'black' : '#f1f1f1')};
    font-size: 18px;
    padding: 0.7vh;
    cursor:pointer;
    background-color: ${(props) => (props.open ? '#C41C19' : 'transparent')};
`
const StyledSearchContainer = styled.div`
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SearchButton = () => {
    const [open, setOpen] = useState(false);

    return (
        <StyledSearchContainer>
            <StyledSBtn onClick={() => setOpen(!open)} open={open} >
                <PiMagnifyingGlassFill />
            </StyledSBtn>
            {open && <SearchInput />}
        </StyledSearchContainer>
    )
}
export default SearchButton;
