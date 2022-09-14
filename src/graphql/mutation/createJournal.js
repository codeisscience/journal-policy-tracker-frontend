import { gql } from '@apollo/client';

const CREATE_JOURNAL = gql`
  mutation CreateJournal($journalToCreate: JournalInput!) {
    createJournal(journalToCreate: $journalToCreate) {
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

export default CREATE_JOURNAL;
