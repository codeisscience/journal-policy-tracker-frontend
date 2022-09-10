/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable import/order */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import UserProfile from 'react-user-profile';
import { useQuery, useMutation } from '@apollo/client';
import GET_USER from '../../../graphql/queries/GET_USER';
import Logout from './Logout';
import { SectionLayout } from '../../marginals';
import { Container } from 'react-bootstrap';
import LOGOUT from '../../../graphql/mutation/LOGOUT';
import { useHistory } from 'react-router';
import { Heading, Card, Title, ButtonLogout, H1 } from './styles';
import { FormInputBtn } from '../styles';

function Profile() {
  const { data } = useQuery(GET_USER);
  const [logout, { data1, error }] = useMutation(LOGOUT);

  const [user, setUser] = useState('');

  const history = useHistory();

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
