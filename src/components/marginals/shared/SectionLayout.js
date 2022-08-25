import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  min-height: 100vh;
  padding-top: 8rem;
  padding-bottom: 5rem;
  background-color: #efeff0;
  overflow-x: hidden;
  overflow-y: hidden;
  height: auto;
`;

function Section({ children }) {
  return <SectionContainer>{children}</SectionContainer>;
}

export default Section;
