import { gql } from '@apollo/client';

const UPDATE_JOURNAL = gql`
  mutation UpdateJournal($issnToUpdate: String!, $newJournalDetails: JournalInput!) {
    updateJournal(issnToUpdate: $issnToUpdate, newJournalDetails: $newJournalDetails) {
      journal {
        id
        title
        url
        issn
        domainName
        createdAt
        updatedAt
        createdBy
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
      }
    }
  }
`;

export default UPDATE_JOURNAL;
