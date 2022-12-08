/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable import/order */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import LOGOUT from '../../../graphql/mutation/LOGOUT';
import GET_USER from '../../../graphql/queries/GET_USER';
import { SectionLayout } from '../../marginals';
import { FormInputBtn } from '../styles';
import { Card, H1, Heading, Title } from './styles';

function Profile() {
  const { data } = useQuery(GET_USER);
  const [logout, { data1, error }] = useMutation(LOGOUT);

  const [user, setUser] = useState('');

  const history = useNavigate();

  useEffect(() => {
    if (data) {
      setUser(data.getCurrentUser);
    }
  }, [setUser, data]);

  const handlelogout = async (event) => {
    logout({});
    history.push('/signup');
  };

  return (
    <SectionLayout>
      <Container>
        <Heading style={{ textAlign: 'center' }}>User Profile</Heading>

        <Card>
          <H1>Name: {user.fullName}</H1>
          <H1>Username: {user.username}</H1>
          <Title>{user.role}</Title>
          <H1>Email: {user.email}</H1>
          <FormInputBtn onClick={handlelogout}>Logout</FormInputBtn>
        </Card>
      </Container>
    </SectionLayout>
  );
}

export default Profile;
