/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
import React, { useReducer, useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faSquareCheck,
  faRectangleXmark,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import useFetch from '../Journals/useFetch';
import {
  Head,
  Title,
  Subhead,
  Subhead2,
  Box,
  List,
  Que,
  Misc,
  UpdateContainer,
  Icon,
  ButtonContainer,
} from './styles';
import { FormInputBtn } from '../Authentication/styles';
import { SectionLayout, PolicyContainer } from '../marginals';
import reducer from '../../useReducer/JournalDetails/reducer';
import GET_ALL_JOURNAL_DETAILS from '../../graphql/queries/getFullJournalByISSN';
import DELETE_JOURNAL from '../../graphql/mutation/deleteJournal';
import Spinner from '../marginals/Loader/Spinner';

function Details() {
  const initialState = {
    posts: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { issn } = useParams();
  const history = useHistory();

  const { data, loading, error, refetch } = useQuery(GET_ALL_JOURNAL_DETAILS, {
    variables: { issn },
  });

  const [deleteJournal] = useMutation(DELETE_JOURNAL);

  useEffect(() => {
    if (loading === false) {
      dispatch({ type: 'POSTS', payload: data?.getJournalByISSN });
    }
  }, [data?.getJournalByISSN, loading]);

  const handleDelete = (issn) => {
    deleteJournal({
      variables: { issnToDelete: issn },
    }).then(() => refetch());
    history.push('/journal');
  };

  const indv = state.posts;

  const policy = indv?.policies;

  const poli = [
    {
      ques: 'POLICY TYPE:',
      ans: indv?.policies && indv?.policies.policyType,
    },
    {
      ques: 'DATA AVAILABILITY STATEMENT PUBLISHED:',
      ans:
        indv?.policies && indv?.policies.isDataAvailabilityStatementPublished ? (
          <FontAwesomeIcon icon={faSquareCheck} color='green' />
        ) : (
          <FontAwesomeIcon icon={faRectangleXmark} color='red' />
        ),
    },
    {
      ques: 'DATA SHARED:',
      ans:
        indv?.policies && indv?.policies.isDataShared ? (
          <FontAwesomeIcon icon={faSquareCheck} color='green' />
        ) : (
          <FontAwesomeIcon icon={faRectangleXmark} color='red' />
        ),
    },
    {
      ques: 'DATA PEER REVIEWED:',
      ans:
        indv?.policies && indv?.policies.isDataPeerReviewed ? (
          <FontAwesomeIcon icon={faSquareCheck} color='green' />
        ) : (
          <FontAwesomeIcon icon={faRectangleXmark} color='red' />
        ),
    },
    {
      ques: 'ENFORCED:',
      ans: indv?.policies && indv?.policies.enforced,
    },
    {
      ques: 'ENFORCED EVIDENCE:',
      ans: indv?.policies && indv?.policies.enforcedEvidence,
    },
  ];

  const misc = [
    {
      ques: 'CREATED AT:',
      ans: indv && indv.createdAt,
    },
    {
      ques: 'UPDATED AT:',
      ans: indv && indv.createdAt,
    },
    {
      ques: 'CREATED BY:',
      ans: indv && indv.createdBy,
    },
  ];

  if (loading) {
    <Spinner />;
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
              {poli.map((detail) => (
                <List primary>
                  <Que primary>{detail.ques}</Que>
                  <span style={{ color: 'black' }}>{detail.ans}</span>
                </List>
              ))}
            </Box>
            <Misc>
              <span style={{ color: '#EC8D20' }}>{indv.domainName}</span> |{' '}
              <FontAwesomeIcon icon={faLink} color='#29A3CE' />{' '}
              <span style={{ color: '#A39797' }}>{indv.url}</span>
              <UpdateContainer>
                {misc.map((mis) => (
                  <List>
                    <Que>{mis.ques}</Que>
                    <div>{mis.ans}</div>
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
