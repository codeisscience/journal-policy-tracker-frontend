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
          <>
          <h2>{indv.title}</h2>
          <div>
            <h2>Policy</h2>
            <p>POLICY TYPE: {indv.policies.policy}</p>
            <p>DATA AVAILABILITY STATEMENT PUBLISHED: {indv.policies.dataavail}</p>
            <p>DATA SHARED: {indv.policies.datashared}</p>
            <p>DATA PEER REVIEWED: {indv.policies.peerreview}</p>
            <p>ENFORCED: {indv.policies.enforced}</p>
            <p>ENFORCED EVIDENCE: {indv.policies.enforcedevidence}</p>
          </div>
          </>
        )}
       </h1>
    </Container>
    
  )
}

export default Details;