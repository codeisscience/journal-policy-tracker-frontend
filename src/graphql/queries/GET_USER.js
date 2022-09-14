import { gql } from '@apollo/client';

const GET_USER = gql`
  query GetCurrentUser {
    getCurrentUser {
      id
      fullName
      username
      email
      role
      createdAt
      updatedAt
    }
  }
`;

export default GET_USER;
