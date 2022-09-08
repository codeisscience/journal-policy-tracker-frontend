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
import { Heading, Card, Title, ButtonLogout } from './styles';

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
          {/* <img src="/w3images/team2.jpg" alt="John" style="width:100%"> */}
          <h1>{user.fullName}</h1>
          <p>{user.username}</p>
          <Title>{user.role}</Title>
          <p>Email: {user.email}</p>

          <p>
            <button onClick={handlelogout}>Logout</button>
          </p>
        </Card>
      </Container>
    </SectionLayout>
  );
}

export default Profile;
