import { gql } from '@apollo/client';

const GET_ALL_JOURNAL_DETAILS = gql`
  query GetJournalByISSN($issn: String!) {
    getJournalByISSN(issn: $issn) {
      id
      title
      url
      issn
      domainName
      policies {
        title
        firstYear
        lastYear
        policyType
        isDataAvailabilityStatementPublished
        isDataShared
        isDataPeerReviewed
        enforced
        enforcedEvidence
      }
      createdAt
      updatedAt
      createdBy
    }
  }
`;

export default GET_ALL_JOURNAL_DETAILS;
