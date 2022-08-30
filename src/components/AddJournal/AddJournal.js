/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Switch from 'react-switch';
import {
  Container,
  Head,
  Label,
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
import { SectionLayout, PolicyContainer } from '../marginals';

const AddJournal = () => {
  const {
    title,
    authors,
    journaltype,
    topic,
    issn,
    link,
    policy,
    dataavail,
    handleChangeData,
    datashared,
    handleChangeData2,
    peerreview,
    handleChangePeer,
    enforced,
    evidence,
    isPending,
    handleSubmit,
    dispatch,
  } = useGlobalContext();
  return (
    <SectionLayout>
      <PolicyContainer>
        <Head>Create Journal Policies</Head>
        <Form onSubmit={handleSubmit}>
          <Label>Journal titile</Label>
          <Input
            type='text'
            required
            value={title}
            onChange={(e) =>
              dispatch({
                type: 'SET_TITLE',
                payload: e.target.value,
              })
            }
          />
          <FirstDiv>
            <div>
              <Label>Journal Type</Label>
              <Input
                type='text'
                required
                value={journaltype}
                onChange={(e) =>
                  dispatch({
                    type: 'SET_JOURNALTYPE',
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <Label>ISSN Number</Label>
              <Input
                type='text'
                required
                value={issn}
                onChange={(e) =>
                  dispatch({
                    type: 'SET_ISSN',
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <Label>Enforced Evidence</Label>
              <Input
                type='text'
                required
                value={evidence}
                onChange={(e) =>
                  dispatch({
                    type: 'SET_EVIDENCE',
                    payload: e.target.value,
                  })
                }
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
                onChange={(e) =>
                  dispatch({
                    type: 'SET_TOPIC',
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <Label>Source</Label>
              <Input
                type='text'
                required
                value={link}
                onChange={(e) =>
                  dispatch({
                    type: 'SET_LINK',
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <Label>Authors</Label>
              <Input
                type='text'
                required
                value={authors}
                onChange={(e) =>
                  dispatch({
                    type: 'SET_AUTHORS',
                    payload: e.target.value,
                  })
                }
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
                <Select
                  value={policy}
                  onChange={(e) =>
                    dispatch({
                      type: 'SET_POLICY',
                      payload: e.target.value,
                    })
                  }
                >
                  <option value='policy 1'>Policy 1</option>
                  <option value='policy 2'>Policy 2</option>
                  <option value='policy 3'>Policy 3</option>
                </Select>
              </div>
              <div>
                <Label>Enforced:</Label>
                <Select
                  value={enforced}
                  onChange={(e) =>
                    dispatch({
                      type: 'ENFORCED',
                      payload: e.target.value,
                    })
                  }
                >
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
    </SectionLayout>
  );
};

export default AddJournal;
