import styled from 'styled-components';

export const Container = styled.div`
  // display: grid;
  min-height: 100vh;
  padding-bottom: 5%;
  background-color: #efeff0;
  overflow-x: hidden;
`;

export const Head = styled.h1`
  margin-top: 100px;
  font-size: 2rem;
  color: #ec8d20;
  text-align: center;
`;

export const PolicyContainer = styled.div`
  width: 65%;
  margin: 0px auto 0px auto;
  background-color: #ffff;
  padding: 3rem 6rem;
  border: 5px;
  align-self: center;
  justify-self: center;
  @media (max-width: 1300px) {
    width: 78%;
    padding: 2rem 4rem;
  }
  @media (max-width: 800px) {
    width: 85%;
    padding: 1.4rem 2rem;
  }
  @media (max-width: 600px) {
    width: 88%;
    padding: 1.5rem 1.5rem;
  }
`;

export const Title = styled.h1`
  width: 90%;
  font-size: 1.4rem;
  color: #6b6868;
  line-height: 1.4;
  @media (max-width: 1000px) {
    font-size: 1.6rem;
    line-height: 1.2;
  }
  @media (max-width: 700px) {
    font-size: 1.2rem;
    line-height: 1.2;
  }
`;

export const Subhead = styled.div`
  display: flex;
  gap: 5px;
`;

export const Subhead2 = styled.p`
  font-size: 1.4rem;
  @media (max-width: 1000px) {
    font-size: 1.6rem;
  }
  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

export const Icon = styled.div`
  position: relative;
  top: 7px;
  @media (max-width: 700px) {
    top: 4px;
  }
`;

export const Box = styled.div`
  display: grid;
  color: #a39797;
`;

export const List = styled.p`
  display: ${(props) => (props.primary ? 'grid' : 'flex')};
  grid-template-columns: ${(props) => (props.primary ? '50% 50%' : 'none')};
  border-bottom: ${(props) => (props.primary ? '0.5px solid #DFD3D3' : 'none')};
  font-size: ${(props) => (props.primary ? '0.9375rem' : '0.98rem')};
  gap: ${(props) => (props.primary ? '0px' : '0.5rem')};
  margin-bottom: ${(props) => (props.primary ? '1rem' : '0px')};
  @media (max-width: 1530px) {
    gap: ${(props) => (props.primary ? '0rem' : '1rem')};
  }
  @media (max-width: 1000px) {
    grid-template-columns: ${(props) => (props.primary ? '70% 30%' : 'none')};
  }
  @media (max-width: 400px) {
    font-size: 0.9375rem;
  }
`;

export const Que = styled.p`
  width: ${(props) => (props.primary ? '45%' : 'none')};
  color: #a39797;
  margin-bottom: ${(props) => (props.primary ? '1rem' : '0px')};
  @media (max-width: 1620px) {
    width: ${(props) => (props.primary ? '60%' : 'none')};
  }
  @media (max-width: 1530px) {
    width: ${(props) => (props.primary ? '80%' : 'none')};
  }
  @media (max-width: 1000px) {
    width: ${(props) => (props.primary ? '90%' : 'none')};
  }
`;

export const UpdateContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 5px;
  margin-top: 6px;
`;

export const Misc = styled.div``;
