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
import { useGlobalContext } from '../../context/DataContext';
import { SectionLayout, PolicyContainer } from '../marginals';

const Edit = () => {
  const [post, setPost] = useState([]);
  const [plicies, setPlicies] = useState([]);

  const { issn } = useParams();

  const { data, loading, error, refetch } = useQuery(GET_ALL_JOURNAL_DETAILS, {
    variables: { issn },
  });

  useEffect(() => {
    if (data) {
      setPost(data?.getJournalByISSN);
    }
    if (data) {
      setPlicies(data?.getJournalByISSN?.policies);
    }
  }, [data?.getJournalByISSN, data, data?.getJournalByISSN?.policies]);

  const setPost2 = (key, value) => setPost((current) => ({ ...current, [key]: value }));

  // const setPost3 = (key, value) => setPlicies((current) => ({ ...current, [key]: value }));

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
            title: post?.policies?.title,
            policyType: post.policies.policyType,
            enforced: post?.policies?.enforced,
            enforcedEvidence: post?.policies?.enforcedEvidence,
            isDataAvailabilityStatementPublished:
              post?.policies?.isDataAvailabilityStatementPublished,
            isDataShared: post?.policies?.isDataShared,
            isDataPeerReviewed: post?.policies?.isDataPeerReviewed,
            firstYear: post?.policies?.firstYear,
          },
        },
      },
    });
    console.log({ response });
  };

  // console.log({
  //   policies: {
  //     title: post?.policies?.title,
  //     policyType: post?.policies?.policyType,
  //     enforced: post?.policies?.enforced,
  //     enforcedEvidence: post?.policies?.enforcedEvidence,
  //     isDataAvailabilityStatementPublished: post?.policies?.isDataAvailabilityStatementPublished,
  //     isDataShared: post?.policies?.isDataShared,
  //     isDataPeerReviewed: post?.policies?.isDataPeerReviewed,
  //     firstYear: post?.policies?.firstYear,
  //   },
  // });

  if (!post) return <div>Loading</div>;

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
                  value={post?.policies?.enforcedEvidence}
                  onChange={(e) => {
                    setPost2('policies?.enforcedEvidence', e.target.value);
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
              {/* <div>
                <Label>Authors</Label>
                <Input
                  type='text'
                  required
                  value={editA}
                  onChange={(e) =>
                    dispatch({
                      type: 'EDIT_AUTHORS',
                      payload: e.target.value,
                    })
                  }
                />
              </div> */}
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
                    value={post?.policies?.policyType}
                    onChange={(e) => {
                      setPost2('policies.policyType', e.target.value);
                    }}
                  >
                    <option value='NUMBER_ONE'>NUMBER_ONE</option>
                    <option value='NUMBER_TWO'>NUMBER_TWO</option>
                    <option value='NUMBER_THREE'>NUMBER_THREE</option>
                  </Select>
                </div>
                <div>
                  <Label>Enforced:</Label>
                  <Select
                    value={post?.policies?.enforced}
                    onChange={(e) => {
                      setPost2('policies.enforced', e.target.value);
                    }}
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
                          onChange={(nextChecked) =>
                            setPost2('policies.isDataAvailabilityStatementPublished', nextChecked)
                          }
                          checked={post?.policies?.isDataAvailabilityStatementPublished}
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
                          onChange={(nextChecked) =>
                            setPost2('policies.isDataPeerReviewed', nextChecked)
                          }
                          checked={post?.policies?.isDataPeerReviewed}
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
                          onChange={(nextChecked) => setPost2('policies.isDataShared')}
                          checked={post?.policies?.isDataShared}
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
        {/* )} */}
      </PolicyContainer>
    </SectionLayout>
  );
};

export default Edit;

/**
 * fetch post details via graphql query (useQuery query)
 * set these details in local state (useState, useEffect)
 * use this state to give values to input and update via onChange
 * onClick for save, use post state
 */
