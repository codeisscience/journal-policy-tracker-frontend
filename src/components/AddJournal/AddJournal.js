/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

// Libraries
import { useMutation } from '@apollo/client';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import Switch from 'react-switch';

// Styles
import { FormInputBtn } from '../Authentication/styles';
import {
  Div,
  FirstDiv,
  Form,
  Head,
  Icon,
  Input,
  Label,
  SecondDiv,
  Select,
  Subhead,
  Subhead2,
  Toggle,
  ToggleContainer,
} from './styles';

// Components
import { Error, Loader, PolicyContainer, SectionLayout } from '../marginals';

// Graphql
import CREATE_JOURNAL from '../../graphql/mutation/createJournal';

// Reducer
import { useGlobalContext } from '../../context/DataContext';

const AddJournal = () => {
  // States
  const {
    title,
    topic,
    issn,
    link,
    policy,
    dataavail,
    datashared,
    peerreview,
    enforced,
    evidence,
    policyTitle,
    dispatch,
  } = useGlobalContext();
  const [firstYear, setFirstYear] = useState();

  // GraphQL Mutation
  const [createJournal, { error, loading }] = useMutation(CREATE_JOURNAL);

  const history = useNavigate();

  // Function to add Journal
  const addJournal = async (event) => {
    event.preventDefault();
    const response = await createJournal({
      variables: {
        journalToCreate: {
          title,
          url: link,
          issn,
          domainName: topic,
          policies: {
            title: policyTitle,
            policyType: policy,
            enforced,
            enforcedEvidence: evidence,
            isDataAvailabilityStatementPublished: dataavail,
            isDataShared: datashared,
            isDataPeerReviewed: peerreview,
            firstYear,
          },
        },
      },
    });
    history.push('/journal');
  };

  // Toggle handlechange
  const handleChangeData = (nextChecked) => {
    dispatch({ type: 'SET_DATAAVAIL', payload: nextChecked });
  };
  const handleChangeData2 = (nextChecked) => {
    dispatch({ type: 'SET_DATASHARED', payload: nextChecked });
  };
  const handleChangePeer = (nextChecked) => {
    dispatch({ type: 'SET_PEERREVIEW', payload: nextChecked });
  };

  // Loading and Error component
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <SectionLayout>
      <PolicyContainer>
        <Head>Create Journal Policies</Head>
        <Form onSubmit={addJournal}>
          <Label>Journal titile</Label>
          <Input
            type='text'
            required
            value={title}
            onChange={(e) => dispatch({ type: 'SET_TITLE', payload: e.target.value })}
          />
          <FirstDiv>
            <div>
              <Label>Journal Type</Label>
              <Input
                type='text'
                required
                value={topic}
                onChange={(e) => dispatch({ type: 'SET_TOPIC', payload: e.target.value })}
              />
            </div>
            <div>
              <Label>ISSN Number</Label>
              <Input
                type='text'
                required
                value={issn}
                onChange={(e) => dispatch({ type: 'SET_ISSN', payload: e.target.value })}
              />
            </div>
            <div>
              <Label>Enforced Evidence</Label>
              <Input
                type='text'
                required
                value={evidence}
                onChange={(e) => dispatch({ type: 'SET_EVIDENCE', payload: e.target.value })}
              />
            </div>
          </FirstDiv>
          <FirstDiv>
            <div>
              <Label>Source</Label>
              <Input
                type='text'
                required
                value={link}
                onChange={(e) => dispatch({ type: 'SET_LINK', payload: e.target.value })}
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
                <Label>First Year</Label>
                <Input
                  type='number'
                  required
                  value={firstYear}
                  onChange={(e) => setFirstYear(parseInt(e.target.value, 10))}
                />
              </div>
              <div>
                <Label>Policy Title</Label>
                <Input
                  type='text'
                  required
                  value={policyTitle}
                  onChange={(e) => dispatch({ type: 'POLICYTITLE', payload: e.target.value })}
                />
              </div>
              <div>
                <Label>Policy Type:</Label>
                <Select
                  value={policy}
                  onChange={(e) => dispatch({ type: 'SET_POLICY', payload: e.target.value })}
                >
                  <option value='NUMBER_ONE'>NUMBER_ONE</option>
                  <option value='NUMBER_TWO'>NUMBER_TWO</option>
                  <option value='NUMBER_THREE'>NUMBER_THREE</option>
                </Select>
              </div>
              <div>
                <Label>Enforced:</Label>
                <Select
                  value={enforced}
                  onChange={(e) => dispatch({ type: 'SET_ENFORCED', payload: e.target.value })}
                >
                  <option value='YES'>Yes - before publication</option>
                  <option value='NO'>Option 2</option>
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
                        // onHandleColor='#'
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
                        // onHandleColor='#'
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
                        // onHandleColor='#'
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
          <FormInputBtn>Add blog</FormInputBtn>
        </Form>
      </PolicyContainer>
    </SectionLayout>
  );
};

export default AddJournal;
