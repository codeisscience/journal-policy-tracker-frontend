/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
import React from 'react'
import { useParams } from 'react-router';
import useFetch from '../Journals/useFetch';
import { Container } from './styles';


function Details() {
  const { id } = useParams();
  const { journalFetch: indv } = useFetch('http://localhost:8000/journals/' + id);

  return (
    <Container>
       <h1>
        Journal Detail - { id }
        { indv && (
          <h2>{ indv.title }</h2>
        )}
       </h1>
    </Container>
    
  )
}

export default Details;