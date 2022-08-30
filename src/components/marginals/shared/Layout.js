/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';

const Layout = styled.div`
  position: relative;
  width: full;
`;

export default ({ children }) => {
  return (
    <Layout>
      <Navbar />
      {children}
    </Layout>
  );
};
