import styled from 'styled-components';

export const FormContentRight = styled.div`
  border-radius: 50px 50px 50px 50px;
  background: #FFFFFF;
  margin-top: 1rem;
  padding-left: 2.5rem;
  padding-bottom: 1rem;
  position: relative;
  @media (max-width: 646px) {
    padding: 10px;
    margin : 0px auto 0 auto;
  }
`;

export const FormDiv = styled.form`
padding-left: 2.5rem;
padding-top: 5rem;
width: 100%;
display: flex;
flex-direction: column;
gap: 25px;
justify-content: center;
align-items: left;
@media (max-width: 1650px) {
  padding-top: 3.5rem;
}
@media (max-width: 1330px) {
    padding-top: 2rem;
  }

@media (max-width: 1000px) {
    gap: 12px;
  }
@media (max-width: 646px) {
  padding: 0.7rem;
  gap: 5px;
}
`;

export const FormH1 = styled.h1`
  color: #52504D;
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

export const FormH2 = styled.h1`
  color: #52504D;
  font-size: 1rem;
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
  border: 1px solid #7D7A76;
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
  color: #7D7A76;
`;

export const FormInputsP = styled.p`
  color: #E48900;
  font-size: 0.8rem;
  margin-bottom:0px;
  margin-top: 0.2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const FormInputBtn = styled.button`
  width: 28.5%;
  padding: 2.2%;
  // height: 50px;
  margin-top: 10px;
  border-radius: 10px;
  background: ${props => props.primary ? 'white' : '#E48900'};
  outline: none;
  border: ${props => props.primary ? '1.5px solid #EA8900' : 'none'};
  color: ${props => props.primary ? '#EA8900' : '#fff'};
  font-size: 1rem;
  &:hover {
    cursor: pointer;
    color: #fff;
    background: ${props => props.primary ? '#fff' : '#F6B149'};
    transition: all 0.2s ease-out;
  }
  @media (max-width: 1000px) {
    width: 38%;
  }
  @media (max-width: 646px) {
    width: 100%;
  }
`;
