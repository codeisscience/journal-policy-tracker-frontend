import { gql } from '@apollo/client';

const DELETE_JOURNAL = gql`
  mutation DeleteJournal($issnToDelete: String!) {
    deleteJournal(issnToDelete: $issnToDelete)
  }
`;

export default DELETE_JOURNAL;
