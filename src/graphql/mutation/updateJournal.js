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
  }
`;

export default UPDATE_JOURNAL;
