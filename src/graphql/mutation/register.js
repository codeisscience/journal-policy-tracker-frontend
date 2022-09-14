import { gql } from '@apollo/client';

const REGISTER = gql`
  mutation Register($userInfo: RegisterInput!) {
    register(userInfo: $userInfo) {
      user {
        id
        fullName
        username
        email
        createdAt
        updatedAt
      }
      errors {
        field
        message
      }
    }
  }
`;

export default REGISTER;
