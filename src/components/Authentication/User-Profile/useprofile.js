/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable import/order */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import GET_USER from '../../../graphql/queries/GET_USER';
import Logout from './Logout';
import { SectionLayout } from '../../marginals';
import { Container } from 'react-bootstrap';
import LOGOUT from '../../../graphql/mutation/LOGOUT';
import { useHistory } from 'react-router';

import {
  HeadingContainer,
  Heading,
  Card,
  Title,
  ButtonLogout,
  P,
  H1,
  H4,
  CTXH4,
  ProfileGridContainer,
  ProfileImageContainer,
  ProfileImageCircle,
  ProfileCTXText,
  ProfileCtxBadge,
  ProfileCtxUser,
  ProfileDetailsWrapper,
  ProfileDetails,
  ProfileGridInnerContainer,
} from './styles';
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
        <HeadingContainer>
          <Heading style={{ textAlign: 'center' }}>User Profile</Heading>
        </HeadingContainer>
        <ProfileGridContainer>
          <Card>
            <ProfileImageContainer>
              <ProfileImageCircle></ProfileImageCircle>
            </ProfileImageContainer>
            <ProfileCTXText>
              <ProfileCtxUser>
                <CTXH4>Mary Jane (spidergirl)</CTXH4>
              </ProfileCtxUser>
              <ProfileCtxBadge>
                <span>New Member</span>
              </ProfileCtxBadge>
            </ProfileCTXText>
            {/* Additional Information About This User */}
            <ProfileDetailsWrapper>
              <ProfileDetails>
                <P>Username</P>
                <H4>{user.username} JaneMar23 </H4>
              </ProfileDetails>
              <ProfileDetails>
                <P>Role</P>
                <H4>{user.role} Front-End Engineer </H4>
              </ProfileDetails>
              <ProfileDetails>
                <P>Email</P>
                <H4>{user.email} Jjanmar02@gmail.com</H4>
              </ProfileDetails>
              <ProfileDetails>
                <P>Gender</P>
                <H4>Female</H4>
              </ProfileDetails>
              <ProfileDetails>
                <P>About</P>
                <H4>Swimming, Dancing and Coding </H4>
              </ProfileDetails>
              {/* LogOut Button */}
              <FormInputBtn onClick={handlelogout}>Logout</FormInputBtn>
            </ProfileDetailsWrapper>
            {/* Additional information section Ends here */}
          </Card>
        </ProfileGridContainer>
      </Container>
    </SectionLayout>
  );
}

export default Profile;
