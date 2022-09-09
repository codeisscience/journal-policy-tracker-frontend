/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

// Libraries
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Switch from 'react-switch';
import { useMutation } from '@apollo/client';

// Styles
import CREATE_JOURNAL from '../../graphql/mutation/createJournal';
import {
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

// Components
import { Error, Loader, SectionLayout, PolicyContainer } from '../marginals';

const AddJournal = () => {
  // States
  const [title, setTitile] = useState('');
  const [topic, setTopic] = useState('');
  const [issn, setIssn] = useState('');
  const [link, setLink] = useState('');
  const [policy, setPolicy] = useState('NUMBER_ONE');
  const [dataavail, setDataavail] = useState(false);
  const [datashared, setDatashared] = useState(false);
  const [peerreview, setPeerreview] = useState(false);
  const [enforced, setEnforced] = useState('YES');
  const [evidence, setEvidence] = useState('');
  const [policyTitle, setPolicyTitle] = useState('');
  const [firstYear, setFirstYear] = useState();

  // GraphQL Mutation
  const [createJournal, { error, loading }] = useMutation(CREATE_JOURNAL);

  // useHistory router
  const history = useHistory();

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
    setDataavail(nextChecked);
  };
  const handleChangeData2 = (nextChecked) => {
    setDatashared(nextChecked);
  };
  const handleChangePeer = (nextChecked) => {
    setPeerreview(nextChecked);
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
          <Input type='text' required value={title} onChange={(e) => setTitile(e.target.value)} />
          <FirstDiv>
            <div>
              <Label>Journal Type</Label>
              <Input
                type='text'
                required
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
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
              <Label>Source</Label>
              <Input type='text' required value={link} onChange={(e) => setLink(e.target.value)} />
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
                  onChange={(e) => setPolicyTitle(e.target.value)}
                />
              </div>
              <div>
                <Label>Policy Type:</Label>
                <Select value={policy} onChange={(e) => setPolicy(e.target.value)}>
                  <option value='NUMBER_ONE'>NUMBER_ONE</option>
                  <option value='NUMBER_TWO'>NUMBER_TWO</option>
                  <option value='NUMBER_THREE'>NUMBER_THREE</option>
                </Select>
              </div>
              <div>
                <Label>Enforced:</Label>
                <Select value={enforced} onChange={(e) => setEnforced(e.target.value)}>
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
