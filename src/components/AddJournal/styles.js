import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding-bottom: 5%;
  background-color: #efeff0;
  overflow-x: hidden;
`;

export const Head = styled.h1`
  font-size: 1.8rem;
  color: #ec8d20;
  //   text-align: center;
`;

export const PolicyContainer = styled.div`
  width: 65%;
  margin: 140px auto 0px auto;
  background-color: #ffff;
  padding: 3rem 6rem;
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

export const Toggle = styled.div`
  padding-left: 5px;
  padding-top: 1.5px;
  margin-left: 4rem;
`;

export const Label = styled.label`
  width: 100%;
  font-size: 0.98rem;
  text-align: left;
  display: block;
  color: #a39797;
`;

export const Input = styled.input`
  outline: 0;
  width: ${(props) => (props.primary ? '45%' : '100%')};
  border-width: 0 0 1px;
  border-color: #dfd3d3;
  color: #7e5e5e;
  font-size: 1.3rem;
`;

export const FirstDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 50px;
`;

export const Subhead = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 2rem;
`;

export const Icon = styled.div`
  position: relative;
  top: 7px;
  @media (max-width: 700px) {
    top: 4px;
  }
`;

export const Subhead2 = styled.p`
  font-size: 1.4rem;
  // @media (max-width: 1000px) {
  //   font-size: 1.6rem;
  // }
  // @media (max-width: 700px) {
  //   font-size: 1.2rem;
  // }
`;

export const Select = styled.select`
  width: 20rem;
  padding: 2.2%;
  height: 50px;
  margin-top: 14px;
  border-radius: 10px;
  background: white;
  outline: none;
  border: 1.5px solid #ea8900;
  color: #ea8900;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
    color: #fff;
    background: ${(props) => (props.primary ? '#fff' : '#F6B149')};
    transition: all 0.2s ease-out;
  }
  @media (max-width: 1000px) {
    width: 38%;
  }
  @media (max-width: 646px) {
    width: 100%;
  }
`;

export const SecondDiv = styled.div`
  display: flex;
  // margin-top: ${(props) => (props.primary ? '40px' : '0px')};
  width: ${(props) => (props.primary ? '100%' : '100%')};
  gap: ${(props) => (props.primary ? '2rem' : '6rem')};
`;

export const Form = styled.form`
  display: grid;
  width: 70%;
`;

export const Div = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.primary ? '60% 40%' : '')};
  width: 100%;
`;

export const ToggleContainer = styled.div`
  display: grid;
  // gap: ${(props) => (props.primary ? '4rem' : '4rem')};
  margin-top: 50px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 100px;
  column-gap: 7rem;
`;
