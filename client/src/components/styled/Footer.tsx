import { styled } from "styled-components"
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import logo from '../../assets/resources/bw logo.jpg'
const StyledFooterContainer = styled.div`
    display:grid;
    grid-template-rows: 8vh 12vh;
    width: 100%;
    height: 20vh;
    background-color: black;
    @media (max-width: 768px) {
        display: none;
    }
`;
const StyledFCTop = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items:center;

    div{
        display: flex;
        flex-direction: row;
        margin-left: auto;
        margin-right: 20px;
    }
`;
const StyledFCBottom = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;

    img{
        height: 10vh;
        margin-left: 10px;
    }
    p{
        font-size: 10px;
        color: darkgray;
        padding: 0;
        margin-left: 10px;
        width: 30vh;
    }
`;
const StyledFLink = styled.a`
    text-decoration:none;
    color: #f1f1f1;
    font-weight: bold;
    text-transform: uppercase;
    margin-left: 15px;
    &:hover{
        color: #C41C19;
    }
`;
const SignatureBtn = styled.button`
    background-color: black;
    border: none;
    opacity: 1;
    outline: 0;
    color: black;
    line-height: 40px;
    position: relative;
    text-align: center;
    letter-spacing: 1px;
    display: inline-block;
    text-decoration: none;
    font-family: 'Inconsolata', monospace;
    text-transform: uppercase;
    margin-left: auto;
    margin-right: 15px;
    &:hover:after {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
  &:hover:before {
    opacity: 0;
    transform: translateY(50%) rotateX(90deg);
  }
  &:after {
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    color: white;
    display: block;
    transition: 0.5s;
    position: absolute;
    background: #323237;
    content: 'MATIAS A.C.';
    transform: translateY(-50%) rotateX(90deg);
  }
  &:before {
    border: 1px solid #323237;
    top: 0;
    left: 0;
    opacity: 1;
    color: white;
    display: block;
    padding: 0 30px;
    line-height: 40px;
    transition: 0.5s;
    position: relative;
    background: black;
    content: 'MADE BY';
    transform: translateY(0) rotateX(0);
  }
  @media (max-width: 768px) {

    display: none;

  }
`
const fLinks: string[] = ['About', 'Forums', 'FAQs', 'Terms', 'Privacy'];
const Footer = () => {
    return (
        <footer>
            <StyledFooterContainer>
                <StyledFCTop>
                    {fLinks.map((link) => {
                        return (
                            <StyledFLink key={link} href="/" target="_blank">{link}</StyledFLink>)
                    })}
                    <div>
                        <StyledFLink href="https://github.com/Madpug2022" target="_blank"><AiFillGithub /></StyledFLink>
                        <StyledFLink href="https://www.instagram.com/matias.chiappa/" target="_blank"><AiFillInstagram /></StyledFLink>
                        <StyledFLink href="https://www.linkedin.com/in/matias-alaimo-chiappa-910560230/" target="_blank"><AiFillLinkedin /></StyledFLink>
                        <StyledFLink href="https://twitter.com/?lang=es" target="_blank"><AiFillTwitterCircle /></StyledFLink>
                    </div>
                </StyledFCTop>
                <StyledFCBottom>
                    <img src={logo} alt="Logo" />
                    <p>© 2023 Popcorn, inc. All rights reserved.
                        Hand crafted in Westeros and distributed in Highgarden Area.</p>
                    <SignatureBtn />
                </StyledFCBottom>
            </StyledFooterContainer>
        </footer>
    )
}

export default Footer
