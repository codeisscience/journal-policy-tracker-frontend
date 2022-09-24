import { gql } from '@apollo/client';

const REGISTER = gql`
  mutation Register($userInfo: RegisterInput!) {
    register(userInfo: $userInfo) {
      errors {
        field
        message
      }
      user {
        id
        fullName
        username
        email
        createdAt
        updatedAt
      }
    }
  }
`;

export default REGISTER;
