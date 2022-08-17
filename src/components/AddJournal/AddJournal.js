/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Switch from 'react-switch';
import {
  Container,
  Head,
  Label,
  PolicyContainer,
  Toggle,
  Input,
  FirstDiv,
  Subhead,
  Icon,
  Subhead2,
  Select,
  SecondDiv,
  Form,
  Div,
  ToggleContainer,
} from './styles';
import { FormInputBtn } from '../Authentication/styles';
import { useGlobalContext } from '../../context/DataContext';

const AddJournal = () => {
  const {
    title,
    setTitle,
    authors,
    setAuthors,
    journaltype,
    setJournaltype,
    topic,
    setTopic,
    issn,
    setIssn,
    link,
    setLink,
    policy,
    setPolicy,
    dataavail,
    setDataavail,
    handleChangeData,
    datashared,
    setDatashared,
    handleChangeData2,
    peerreview,
    setPeerreview,
    handleChangePeer,
    enforced,
    setEnforced,
    evidence,
    setEvidence,
    isPending,
    handleSubmit,
  } = useGlobalContext();
  return (
    <Container>
      <PolicyContainer>
        <Head>Create Journal Policies</Head>
        <Form onSubmit={handleSubmit}>
          <Label>Journal titile</Label>
          <Input type='text' required value={title} onChange={(e) => setTitle(e.target.value)} />
          <FirstDiv>
            <div>
              <Label>Journal Type</Label>
              <Input
                type='text'
                required
                value={journaltype}
                onChange={(e) => setJournaltype(e.target.value)}
              />
            </div>
            <div>
              <Label>ISSN Number</Label>
              <Input type='text' required value={issn} onChange={(e) => setIssn(e.target.value)} />
            </div>
            <div>
              <Label>Enforced Evidence</Label>
              <Input
                type='text'
                required
                value={evidence}
                onChange={(e) => setEvidence(e.target.value)}
              />
            </div>
          </FirstDiv>
          <FirstDiv>
            <div>
              <Label>Domain</Label>
              <Input
                type='text'
                required
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>
            <div>
              <Label>Source</Label>
              <Input type='text' required value={link} onChange={(e) => setLink(e.target.value)} />
            </div>
            <div>
              <Label>Authors</Label>
              <Input
                type='text'
                required
                value={authors}
                onChange={(e) => setAuthors(e.target.value)}
              />
            </div>
          </FirstDiv>
          <Subhead>
            <Icon>
              <FontAwesomeIcon icon={faBookmark} color='#EC8D20' />
            </Icon>
            <Subhead2>Policies</Subhead2>
          </Subhead>
          <Div>
            <SecondDiv>
              <div>
                <Label>Policy Type:</Label>
                <Select value={policy} onChange={(e) => setPolicy(e.target.value)}>
                  <option value='policy 1'>Policy 1</option>
                  <option value='policy 2'>Policy 2</option>
                  <option value='policy 3'>Policy 3</option>
                </Select>
              </div>
              <div>
                <Label>Enforced:</Label>
                <Select value={enforced} onChange={(e) => setEnforced(e.target.value)}>
                  <option value='Yes - before publication'>Yes - before publication</option>
                  <option value='option 2'>Option 2</option>
                </Select>
              </div>
            </SecondDiv>
            <SecondDiv primary>
              <ToggleContainer primary>
                <Div primary>
                  <Label>Data Availability Statement Published:</Label>
                  <Label htmlFor='material-switch'>
                    <Toggle>
                      <Switch
                        onChange={handleChangeData}
                        checked={dataavail}
                        onColor='#ef9c38'
                        onHandleColor='#'
                        handleDiameter={22}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
                        activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
                        height={28}
                        width={54}
                        className='react-switch'
                        id='material-switch'
                      />
                    </Toggle>
                  </Label>
                </Div>
                <Div primary>
                  <Label>Data Peer Reviewed:</Label>
                  <Label htmlFor='material-switch'>
                    <Toggle>
                      <Switch
                        onChange={handleChangePeer}
                        checked={peerreview}
                        onColor='#ef9c38'
                        onHandleColor='#'
                        handleDiameter={22}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
                        activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
                        height={28}
                        width={54}
                        className='react-switch'
                        id='material-switch'
                      />
                    </Toggle>
                  </Label>
                </Div>
                <Div primary>
                  <Label>Data Shared:</Label>
                  <Label htmlFor='material-switch'>
                    <Toggle>
                      <Switch
                        onChange={handleChangeData2}
                        checked={datashared}
                        onColor='#ef9c38'
                        onHandleColor='#'
                        handleDiameter={22}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
                        activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
                        height={28}
                        width={54}
                        className='react-switch'
                        id='material-switch'
                      />
                    </Toggle>
                  </Label>
                </Div>
              </ToggleContainer>
            </SecondDiv>
          </Div>
          {!isPending && <FormInputBtn>Add blog</FormInputBtn>}
          {isPending && <FormInputBtn>Adding blog...</FormInputBtn>}
        </Form>
      </PolicyContainer>
    </Container>
  );
};

export default AddJournal;
