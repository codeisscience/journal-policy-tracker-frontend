import { gql } from '@apollo/client';

const GET_ALL_JOURNALS = gql`
  query GetAllJournals($currentPageNumber: Int!, $limitValue: Int!) {
    getAllJournals(currentPageNumber: $currentPageNumber, limitValue: $limitValue) {
      id
      title
      issn
      domainName
      createdAt
      updatedAt
      createdBy
    }
  }
`;

export default GET_ALL_JOURNALS;
