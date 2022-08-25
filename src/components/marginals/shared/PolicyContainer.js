/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';

const PolicyContainer = styled.div`
  width: 65%;
  margin: 0px auto 0px auto;
  background-color: #ffff;
  padding: 2rem 3rem;
  border: 5px;
  border-radius: 8px;
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

export default ({ children }) => {
  return <PolicyContainer>{children}</PolicyContainer>;
};
