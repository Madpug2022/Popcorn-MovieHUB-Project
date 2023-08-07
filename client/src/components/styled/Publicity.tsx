import { PublicityType } from '../../pages/FeaturedPage/FeaturedPage';
import styled from 'styled-components';

const PublicitySection = styled.section<{ background: string }>`
  height: 200px;
  width: 100%;
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.background};
  box-shadow: inset 1px 1px 150px black;
`;

const PublicityContainer = styled.div<{ order: string }>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: ${props => (props.order === 'row' ? 'row' : 'row-reverse')};
`;

const PublicityImage = styled.img<{ order: string }>`
  height: 20vh;
  overflow: hidden;
  margin: auto 20px;
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.2);
  transform: ${props => (props.order === 'row' ? 'rotate(-8deg)' : 'rotate(8deg)')};
`;

const PublicityRight = styled.div`
  width: 40vw;
  margin: auto 40px;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
`;

const Publicity = (props: PublicityType) => {
  const { image, title, content, order, background } = props;

  return (
    <PublicitySection background={background}>
      <PublicityContainer order={order}>
        <div className='publicity-left'>
          <PublicityImage src={image} alt={`Logo for ${title}`} order={order} />
        </div>
        <PublicityRight>
          <h3>{title}</h3>
          <p>{content}</p>
        </PublicityRight>
      </PublicityContainer>
    </PublicitySection>
  );
};

export default Publicity;
