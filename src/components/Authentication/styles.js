import styled from 'styled-components';

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  width: 60%;
  border-radius: 50px;
  margin: 8rem auto 4rem auto;
  border: 5px solid #50c4ed;
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 840px) {
    width: 90%;
  }
  @media (max-width: 646px) {
    width: 70%;
    grid-template-columns: 1fr;
    border-radius: 20px;
  }
  @media (max-width: 450px) {
    padding: 2%;
    width: 90%;
  }
`;

export const FormContentLeft = styled.div`
  background: #ffdfc0;
  text-align: center;
  border-radius: 0px 50px 50px 0px;
  padding: 2rem;
  position: relative;
  @media (max-width: 646px) {
    display: none;
  }
  @media (max-width: 1200px) {
    padding: 0.8rem;
  }
`;

export const FormImg = styled.img`
  width: 100%;
`;

export const RightH2 = styled.h1`
  color: #52504d;
  font-size: 1.4rem;
  @media (max-width: 1300px) {
    font-size: 1.2rem;
  }
`;

export const Logo = styled.img`
  width: 45%;
  @media (max-width: 1200px) {
    width: 60%;
  }
`;

export const FormContentRight = styled.div`
  border-radius: 50px 50px 50px 50px;
  background: #ffffff;
  margin-top: 1rem;
  padding-left: 2.5rem;
  padding-bottom: 1rem;
  position: relative;
  @media (max-width: 646px) {
    padding: 10px;
    margin: 0px auto 0 auto;
  }
`;

export const FormDiv = styled.form`
  padding-left: 2.5rem;
  padding-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  @media (max-width: 646px) {
    padding: 0.7rem;
    gap: 8px;
  }
`;

export const FormH1 = styled.h1`
  color: #52504d;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: start;
  @media (max-width: 1000px) {
    font-size: 1.3rem;
    margin-right: 1rem;
  }
  @media (max-width: 646px) {
    font-size: 1.1rem;
  }
`;

export const FormInputs = styled.div`
  margin-bottom: 0.5rem;
  display: grid;
  grid-template-rows: auto;
`;

export const FormInput = styled.input`
  display: block;
  // padding-left: 10px;
  outline: none;
  border-radius: 12px;
  padding: 2%;
  width: 60%;
  border: 1px solid #7d7a76;
  :-ms-input-placeholder {
    color: #595959;
    font-size: 12px;
  }
  @media (max-width: 1000px) {
    width: 80%;
  }
  @media (max-width: 646px) {
    width: 100%;
  }
`;

export const FormLabel = styled.label`
  font-size: 0.8rem;
  color: #7d7a76;
`;

export const FormInputsP = styled.p`
  color: #e48900;
  font-size: 0.8rem;
  margin-bottom: 0px;
  margin-top: 0.2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const FormInputBtn = styled.button`
  width: ${(props) => (props.signup ? '60%' : '34.5%')};
  padding: 2.2%;
  // height: 50px;
  margin-top: 10px;
  border-radius: 5px;
  background: ${(props) => (props.primary ? 'white' : '#E48900')};
  outline: none;
  border: ${(props) => (props.primary ? '1.5px solid #EA8900' : 'none')};
  color: ${(props) => (props.primary ? '#EA8900' : '#fff')};
  font-size: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 2em auto 0 auto;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    color: #fff;
    background: ${(props) => (props.primary ? '#fff' : '#F6B149')};
    transition: all 0.2s ease-out;
  }
  @media (max-width: 1000px) {
    width: 80%;
  }
  @media (max-width: 646px) {
    width: 100%;
  }
`;

export const FormInputLogin = styled.span`
  font-size: 0.8rem;
  margin-top: 10px;
  color: black;
  width: 60%;
  text-align: center;
  @media (max-width: 646px) {
    width: 100%;
  }
`;

export const FormSuccessDiv = styled.h1`
  // font-size: 24px;
  color: #fff;
`;

export const FormImg2 = styled.img``;
