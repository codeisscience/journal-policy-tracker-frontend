/* eslint-disable no-shadow */
/* eslint-disable max-len */
import React, { useEffect } from 'react';

// Libraries
import { useMutation, useQuery } from '@apollo/client';
import {
  faBookmark,
  faLink,
  faRectangleXmark,
  faSquareCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate, useParams } from 'react-router-dom';

// Styles
import { FormInputBtn } from '../Authentication/styles';
import {
  Box,
  ButtonContainer,
  Head,
  Icon,
  List,
  Misc,
  Que,
  Subhead,
  Subhead2,
  Title,
  UpdateContainer,
} from './styles';

// Components
import { Error, Loader, PolicyContainer, SectionLayout } from '../marginals';

// Graphql
import DELETE_JOURNAL from '../../graphql/mutation/deleteJournal';
import GET_ALL_JOURNAL_DETAILS from '../../graphql/queries/getFullJournalByISSN';

// Reducer
import { useGlobalContext } from '../../context/DataContext';

function Details() {
  // States
  const { posts, dispatch } = useGlobalContext();

  const { issn } = useParams();
  const history = useNavigate();

  // Query/Mutation from GraphQL
  const { data, loading, error, refetch } = useQuery(GET_ALL_JOURNAL_DETAILS, {
    variables: { issn },
  });

  const [deleteJournal] = useMutation(DELETE_JOURNAL);

  // Set details and delete functions
  useEffect(() => {
    if (loading === false) {
      dispatch({ type: 'POSTS', payload: data?.getJournalByISSN });
    }
  }, [data?.getJournalByISSN, loading, dispatch]);

  const handleDelete = (issn) => {
    deleteJournal({
      variables: { issnToDelete: issn },
    }).then(() => refetch());
    history.push('/journal');
  };

  const indv = posts;

  // Policies
  const poli = [
    {
      id: 1,
      ques: 'POLICY TYPE:',
      ans: indv?.policies && indv?.policies.policyType,
    },
    {
      id: 2,
      ques: 'DATA AVAILABILITY STATEMENT PUBLISHED:',
      ans:
        indv?.policies && indv?.policies.isDataAvailabilityStatementPublished ? (
          <FontAwesomeIcon icon={faSquareCheck} color='green' />
        ) : (
          <FontAwesomeIcon icon={faRectangleXmark} color='red' />
        ),
    },
    {
      id: 3,
      ques: 'DATA SHARED:',
      ans:
        indv?.policies && indv?.policies.isDataShared ? (
          <FontAwesomeIcon icon={faSquareCheck} color='green' />
        ) : (
          <FontAwesomeIcon icon={faRectangleXmark} color='red' />
        ),
    },
    {
      id: 4,
      ques: 'DATA PEER REVIEWED:',
      ans:
        indv?.policies && indv?.policies.isDataPeerReviewed ? (
          <FontAwesomeIcon icon={faSquareCheck} color='green' />
        ) : (
          <FontAwesomeIcon icon={faRectangleXmark} color='red' />
        ),
    },
    {
      id: 5,
      ques: 'ENFORCED:',
      ans: indv?.policies && indv?.policies.enforced,
    },
    {
      id: 6,
      ques: 'ENFORCED EVIDENCE:',
      ans: indv?.policies && indv?.policies.enforcedEvidence,
    },
  ];

  // Misc attributes
  const misc = [
    {
      id: 1,
      ques: 'CREATED AT:',
      ans: indv && indv.createdAt,
    },
    {
      id: 2,
      ques: 'UPDATED AT:',
      ans: indv && indv.createdAt,
    },
    {
      id: 3,
      ques: 'CREATED BY:',
      ans: indv && indv.createdBy,
    },
  ];

  // Loading and Error component
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <SectionLayout>
      <Head>Journal policies</Head>
      {indv && (
        <PolicyContainer>
          <Title>{indv.title}</Title>
          <div>
            <Subhead>
              <Icon>
                <FontAwesomeIcon icon={faBookmark} color='#EC8D20' />
              </Icon>
              <Subhead2>Policies</Subhead2>
            </Subhead>
            <Box>
              {poli.map(({ id, ques, ans }) => (
                <List key={id} primary>
                  <Que primary>{ques}</Que>
                  <span style={{ color: 'black' }}>{ans}</span>
                </List>
              ))}
            </Box>
            <Misc>
              <span style={{ color: '#EC8D20' }}>{indv.domainName}</span> |{' '}
              <FontAwesomeIcon icon={faLink} color='#29A3CE' />{' '}
              <span style={{ color: '#A39797' }}>{indv.url}</span>
              <UpdateContainer>
                {misc.map(({ ques, ans, id }) => (
                  <List key={id}>
                    <Que>{ques}</Que>
                    <div>{ans}</div>
                  </List>
                ))}
              </UpdateContainer>
            </Misc>
            <ButtonContainer>
              <Link to={`/edit/${indv.issn}`}>
                <FormInputBtn>Edit Post</FormInputBtn>
              </Link>
              <FormInputBtn style={{ marginLeft: '1rem' }} onClick={() => handleDelete(indv.issn)}>
                Delete Post
              </FormInputBtn>
            </ButtonContainer>
          </div>
        </PolicyContainer>
      )}
      {!indv && (
        <>
          <h2>Journal Not Found</h2>
          <p>
            <Link to='/'>Homepage</Link>
          </p>
        </>
      )}
    </SectionLayout>
  );
}

export default Details;
