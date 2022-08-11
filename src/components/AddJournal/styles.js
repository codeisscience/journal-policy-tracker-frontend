/* eslint-disable max-len */
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
  border-radius: 8px;
  justify-self: center;

  @media (max-width: 1300px) {
    width: 78%;
    padding: 2rem 4rem;
  }
  @media (max-width: 1000px) {
    width: 90%;
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
`;

export const Select = styled.select`
  background-color: white;
  border: thin solid #afaeac;
  border-radius: 4px;
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;

  margin-top: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;

  background-image: linear-gradient(45deg, transparent 50%, #ef9c38 50%),
    linear-gradient(135deg, #ef9c38 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  width: 21rem;

  @media (max-width: 1300px) {
    width: 15rem;
  }
  @media (max-width: 650px) {
    width: 18rem;
  }
`;

export const SecondDiv = styled.div`
  display: ${(props) => (props.primary ? 'flex' : 'grid')};
  grid-template-columns: ${(props) => (props.primary ? '' : '50% 50%')};
  width: ${(props) => (props.primary ? '100%' : '100%')};
  gap: ${(props) => (props.primary ? '2rem' : '1rem')};
  @media (max-width: 650px) {
    grid-template-columns: none;
  }
`;

export const Form = styled.form`
  display: grid;
  width: 70%;

  // // @media (max-width: 1000px) {
  // //   width: 10%;
  // //   padding: 2rem 4rem;
  // // }
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
  grid-template-rows: 80px 70px;
  column-gap: 7rem;

  @media (max-width: 800px) {
    grid-template-columns: none;
  }
`;
