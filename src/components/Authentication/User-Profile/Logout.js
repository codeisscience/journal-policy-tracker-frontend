import React from 'react';
import { useMutation } from '@apollo/client';
import LOGOUT from '../../../graphql/mutation/LOGOUT';

function Logout() {
    const [logout, { data, error }] = useMutation(CREATE_JOURNAL);

    logoutUser
  return (
    <>
      <div>Logout</div>
      <button onClick={}>Logout</button>
    </>
  );
}

export default Logout;
