/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Switch from 'react-switch';
import GET_ALL_JOURNAL_DETAILS from '../../graphql/queries/getFullJournalByISSN';
import UPDATE_JOURNAL from '../../graphql/mutation/updateJournal';
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
} from '../AddJournal/styles';
import { FormInputBtn } from '../Authentication/styles';
import { SectionLayout, PolicyContainer } from '../marginals';
import Spinner from '../marginals/Loader/Spinner';

const Edit = () => {
  const [post, setPost] = useState([]);

  const { issn } = useParams();

  const { data, loading, error, refetch } = useQuery(GET_ALL_JOURNAL_DETAILS, {
    variables: { issn },
  });

  useEffect(() => {
    if (data) {
      setPost(data?.getJournalByISSN);

      console.log({ data });
      setTitle(data.getJournalByISSN.policies.title);
      setPolicyType(data.getJournalByISSN.policies.policyType);
      setEnforced(data.getJournalByISSN.policies.enforced);
      setEnforcedEvidence(data.getJournalByISSN.policies.enforcedEvidence);
      setIsDataAvailabilityStatementPublished(
        data.getJournalByISSN.policies.isDataAvailabilityStatementPublished,
      );
      setIsDataShared(data.getJournalByISSN.policies.isDataShared);
      setIsDataPeerReviewed(data.getJournalByISSN.policies.isDataPeerReviewed);
      setFirstYear(data.getJournalByISSN.policies.firstYear);
    }
  }, [data?.getJournalByISSN, data, data?.getJournalByISSN?.policies]);

  const setPost2 = (key, value) => setPost((current) => ({ ...current, [key]: value }));

  const [title, setTitle] = useState('');
  const [policyType, setPolicyType] = useState('');
  const [enforced, setEnforced] = useState('');
  const [enforcedEvidence, setEnforcedEvidence] = useState('');
  const [isDataAvailabilityStatementPublished, setIsDataAvailabilityStatementPublished] =
    useState(false);
  const [isDataShared, setIsDataShared] = useState(false);
  const [isDataPeerReviewed, setIsDataPeerReviewed] = useState(false);
  const [firstYear, setFirstYear] = useState(9999);

  const [updateJournal, { data1, error1 }] = useMutation(UPDATE_JOURNAL);
  const editJournal = async (event) => {
    event.preventDefault();
    const response = await updateJournal({
      variables: {
        issnToUpdate: issn,
        newJournalDetails: {
          title: post.title,
          url: post.url,
          issn: post.issn,
          domainName: post.domainName,
          policies: {
            title,
            policyType,
            enforced,
            enforcedEvidence,
            isDataAvailabilityStatementPublished,
            isDataShared,
            isDataPeerReviewed,
            firstYear,
          },
        },
      },
    });
  };

  if (loading) {
    <Spinner />;
  }

  return (
    <SectionLayout>
      <PolicyContainer>
        <>
          <Head>Edit Journal Policies</Head>
          <Form onSubmit={editJournal}>
            <Label>Journal title</Label>
            <Input
              type='text'
              required
              value={post.title}
              onChange={(e) => {
                setPost2('title', e.target.value);
              }}
            />
            <FirstDiv>
              <div>
                <Label>Journal Type</Label>
                <Input
                  type='text'
                  required
                  value={post.domainName}
                  onChange={(e) => {
                    setPost2('domainName', e.target.value);
                  }}
                />
              </div>
              <div>
                <Label>ISSN Number</Label>
                <Input
                  type='text'
                  required
                  value={post.issn}
                  onChange={(e) => {
                    setPost2('issn', e.target.value);
                  }}
                />
              </div>
              <div>
                <Label>Enforced Evidence</Label>
                <Input
                  type='text'
                  required
                  value={enforcedEvidence}
                  onChange={(e) => {
                    setEnforcedEvidence(e.target.value);
                  }}
                />
              </div>

              <div>
                <Label>policy title</Label>
                <Input
                  type='text'
                  required
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
            </FirstDiv>
            <FirstDiv>
              <div>
                <Label>Domain</Label>
                <Input
                  type='text'
                  required
                  value={post.domainName}
                  onChange={(e) => {
                    setPost2('domainName', e.target.value);
                  }}
                />
              </div>
              <div>
                <Label>Source</Label>
                <Input
                  type='text'
                  required
                  value={post.url}
                  onChange={(e) => {
                    setPost2('url', e.target.value);
                  }}
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
                  <Select value={policyType} onChange={(e) => setPolicyType(e.target.value)}>
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
                          onChange={(nextChecked) =>
                            setIsDataAvailabilityStatementPublished(nextChecked)
                          }
                          checked={isDataAvailabilityStatementPublished}
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
                          onChange={(nextChecked) => setIsDataPeerReviewed(nextChecked)}
                          checked={isDataPeerReviewed}
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
                          onChange={(nextChecked) => setIsDataShared(nextChecked)}
                          checked={isDataShared}
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

            <FormInputBtn type='submit' onClick={editJournal}>
              Submit
            </FormInputBtn>
          </Form>
        </>
      </PolicyContainer>
    </SectionLayout>
  );
};

export default Edit;
