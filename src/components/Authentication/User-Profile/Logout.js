/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useMutation } from '@apollo/client';
import LOGOUT from '../../../graphql/mutation/LOGOUT';

function Logout() {
  const [logout, { data, error }] = useMutation(LOGOUT);

  const handlelogout = async (event) => {
    logout({});
  };

  return (
    <>
      <div>Logout</div>
      <button onClick={handlelogout}>Logout</button>
    </>
  );
}

export default Logout;
