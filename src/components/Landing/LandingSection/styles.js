import styled from 'styled-components';

export const SectionOne = styled.section`
  margin-top: 5rem;
  margin-bottom: 5em;
  text-align: center;
  display: grid;
  justify-content: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding 1rem;

  @media screen and (max-width:800px){
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding 1rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-style: none;
  text-align: center;
  align-items: center;
`;

export const ImageHeader = styled.img`
  width: 6rem;
  margin: 0px auto 0px auto;
`;

export const Para1 = styled.p`
  width: 80%;
  color: #a7a7a7;
  font-size: 0.8rem;
  line-height: 1.5rem;
`;

export const SectionTwo = styled.section`
  display: grid;
  justify-content: center;
  margin-bottom: 5em;
`;

export const Div2 = styled.div`
  display: flex;
  flex-wrap:wrap;
  padding: 0.5rem 0rem;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  
  @media (max-width: 800px) {
      gap:5rem;
    } 
`;
export const Div3 = styled.div`
  display: flex;
  flex-wrap:wrap;
  padding: 0.5rem 0rem;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  
  @media (max-width: 800px) {
      flex-direction:column-reverse;
      gap:5rem;
    } 
`;

export const Para = styled.div`
  display: grid;
  width: 50%;
  gap: 0.8rem;
`;

export const Para2 = styled.p`
  width: 100%;
  color: #a7a7a7;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const Image2 = styled.img`
  width: 20rem;
`;

export const SectionOH1 = styled.h1`
  color: black;
  font-size: 2rem;
  font-weight: 800;
`;

export const SectionOH2 = styled.h2`
  color: black;
  font-size: 20px;
  font-weight: 600;
`;

export const Section2P = styled.p`
  color: #a7a7a7;
  font-size: 1.2rem;
`;

export const SectionTH2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 900;

  @media (max-width: 800px) {
    font-size: 1.25rem;
    } 
`;
