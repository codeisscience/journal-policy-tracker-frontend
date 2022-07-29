/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
import React from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faSquareCheck,
  faRectangleXmark,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import useFetch from '../Journals/useFetch';
import {
  Container,
  Head,
  PolicyContainer,
  Title,
  Subhead,
  Subhead2,
  Box,
  List,
  Que,
  Misc,
  UpdateContainer,
  Icon,
} from './styles';
import { Authors, Head3 } from '../Journals/styles';

function Details() {
  const { id } = useParams();
  const { journalFetch: indv } = useFetch('http://localhost:8000/journals/' + id);

  const poli = [
    {
      ques: 'POLICY TYPE:',
      ans: indv && indv.policies.policy,
    },
    {
      ques: 'DATA AVAILABILITY STATEMENT PUBLISHED:',
      ans:
        indv && indv.policies.dataavail ? (
          <FontAwesomeIcon icon={faSquareCheck} color='green' />
        ) : (
          <FontAwesomeIcon icon={faRectangleXmark} color='red' />
        ),
    },
    {
      ques: 'DATA SHARED:',
      ans:
        indv && indv.policies.datashared ? (
          <FontAwesomeIcon icon={faSquareCheck} color='green' />
        ) : (
          <FontAwesomeIcon icon={faRectangleXmark} color='red' />
        ),
    },
    {
      ques: 'DATA PEER REVIEWED:',
      ans:
        indv && indv.policies.peerreview ? (
          <FontAwesomeIcon icon={faSquareCheck} color='green' />
        ) : (
          <FontAwesomeIcon icon={faRectangleXmark} color='red' />
        ),
    },
    {
      ques: 'ENFORCED:',
      ans: indv && indv.policies.enforced,
    },
    {
      ques: 'ENFORCED EVIDENCE:',
      ans: indv && indv.policies.enforcedevidence,
    },
  ];

  const misc = [
    {
      ques: 'CREATED AT:',
      ans: indv && indv.published,
    },
    {
      ques: 'UPDATED AT:',
      ans: indv && indv.updated,
    },
    {
      ques: 'CREATED BY:',
      ans: indv && indv.authors.map((author) => <div key={indv.id}>{author}</div>),
    },
  ];

  return (
    <Container>
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
              <span style={{ color: '#EC8D20' }}>{indv.topic}</span> |{' '}
              <FontAwesomeIcon icon={faLink} color='#29A3CE' />{' '}
              <span style={{ color: '#A39797' }}>{indv.link}</span>
              <UpdateContainer>
                {misc.map((mis) => (
                  <List>
                    <Que>{mis.ques}</Que>
                    <div>{mis.ans}</div>
                  </List>
                ))}
              </UpdateContainer>
            </Misc>
          </div>
        </PolicyContainer>
      )}
    </Container>
  );
}

export default Details;
