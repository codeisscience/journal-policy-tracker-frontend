import React from 'react';
import UserProfile from 'react-user-profile';
import { useQuery } from '@apollo/client';
import GET_USER from '../../../graphql/queries/GET_USER';

function Profile() {
  const { data } = useQuery(GET_USER);

  console.log(data);

  const photo =
    // eslint-disable-next-line max-len
    'https://api-cdn.spott.tv/rest/v004/image/images/e91f9cad-a70c-4f75-9db4-6508c37cd3c0?width=587&height=599';
  const userName = 'Harvey Specter';
  const location = 'New York, USA';
  return (
    <div style={{ width: '100%', marginTop: '5rem' }}>
      <UserProfile photo={photo} userName={userName} location={location} />
    </div>
  );
}

export default Profile;
