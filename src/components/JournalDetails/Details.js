/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
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
  ButtonContainer,
} from './styles';
import { Authors, Head3 } from '../Journals/styles';
import { FormInputBtn } from '../Authentication/styles';
import { useGlobalContext } from '../../context/DataContext';

function Details() {
  const { posts, handleDelete } = useGlobalContext();
  const { id } = useParams();
  const indv = posts.find((post) => post.id.toString() === id);
  // const { journalFetch: indv } = useFetch('http://localhost:8000/journals/' + id);

  const poli = [
    {
      ques: 'POLICY TYPE:',
      ans: indv && indv.policy,
    },
    {
      ques: 'DATA AVAILABILITY STATEMENT PUBLISHED:',
      ans:
        indv && indv.dataavail ? (
          <FontAwesomeIcon icon={faSquareCheck} color='green' />
        ) : (
          <FontAwesomeIcon icon={faRectangleXmark} color='red' />
        ),
    },
    {
      ques: 'DATA SHARED:',
      ans:
        indv && indv.datashared ? (
          <FontAwesomeIcon icon={faSquareCheck} color='green' />
        ) : (
          <FontAwesomeIcon icon={faRectangleXmark} color='red' />
        ),
    },
    {
      ques: 'DATA PEER REVIEWED:',
      ans:
        indv && indv.peerreview ? (
          <FontAwesomeIcon icon={faSquareCheck} color='green' />
        ) : (
          <FontAwesomeIcon icon={faRectangleXmark} color='red' />
        ),
    },
    {
      ques: 'ENFORCED:',
      ans: indv && indv.enforced,
    },
    {
      ques: 'ENFORCED EVIDENCE:',
      ans: indv && indv.evidence,
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
      ans: indv && indv.authors,
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
            <ButtonContainer>
              <Link to={`/edit/${indv.id}`}>
                <FormInputBtn>Edit Post</FormInputBtn>
              </Link>
              <FormInputBtn style={{ marginLeft: '1rem' }} onClick={() => handleDelete(indv.id)}>
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
    </Container>
  );
}

export default Details;
