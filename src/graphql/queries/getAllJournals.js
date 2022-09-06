import { gql } from '@apollo/client';

const GET_ALL_JOURNALS = gql`
  query GetAllJournals($currentPageNumber: Int!, $limitValue: Int!) {
    getAllJournals(currentPageNumber: $currentPageNumber, limitValue: $limitValue) {
      journals {
        id
        title
        url
        issn
        domainName
        createdAt
        updatedAt
        createdBy
      }
      totalJournals
    }
  }
`;

export default GET_ALL_JOURNALS;
