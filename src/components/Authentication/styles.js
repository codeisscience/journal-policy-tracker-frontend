import styled from 'styled-components';

export const FormContainer = styled.div`
  margin: 100px auto;
  padding: 8px;
  width: 1000px;
  // box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 50px;
  border: 5px solid #50C4ED;
  height: 600px;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
`;

export const FormContentLeft = styled.div`
  background: #FFDFC0;
  border-radius: 0px 50px 50px 0px;
  position: relative;
  
  justify-content: center;
  align-items: center;
`;

export const FormImg = styled.img`
  width: 80%;
  height: 60%;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FormContentRight = styled.div`
  border-radius: 50px 50px 50px 50px;
  position: relative;
  background: #FFFFFF;
`;

export const FormDiv = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

export const FormH1 = styled.h1`
  font-size: 1rem;
  text-align: start;
  width: 80%;
  margin-bottom: 1rem;
  color: #52504D;
`;

export const FormInputs = styled.div`
  margin-bottom: 0.5rem;
  width: 80%;
`;

export const FormInputsP = styled.p`
  font-size: 0.8rem;
  margin-bottom:0px;
  margin-top: 0.2rem;
  color: #E48900;
`;

export const FormInputBtn = styled.button`
  width: 72.5%;
  height: 50px;
  margin-top: 10px;
  border-radius: 10px;
  background: #E48900;
  outline: none;
  border: none;
  color: #fff;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
    background: #F6B149;
    transition: all 0.4s ease-out;
  }
`;

export const FormInputLogin = styled.span`
  font-size: 0.8rem;
  margin-top: 10px;
  color: black;
  width: 80%;
  text-align: center;
`;

export const FormInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 12px;
  padding: 11px;
  // height: 40px;
  width: 90%;
  border: 1px solid #7D7A76;

  :-ms-input-placeholder {
    color: #595959;
    font-size: 12px;
 }
`;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 6px;
  color: #7D7A76;
`;

export const FormSuccessDiv = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-top: 80px;
  color: #fff;
`;

export const FormImg2 = styled.img`
  width: 60%;
  height: 60%;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const RightH2 = styled.h1`
  font-size: 1.4rem;
  color: #52504D;
  font-weight: bold;
  width: 70%;
  text-align: center;
  margin: 30px 0px 0px 70px;
`;

export const Logo = styled.img`
  width: 50%;
  margin: 30px 0px 0px 100px;
`;