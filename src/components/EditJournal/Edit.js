/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { React, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
} from '../AddJournal/styles';
import { FormInputBtn } from '../Authentication/styles';
import { useGlobalContext } from '../../context/DataContext';

const Edit = () => {
  const {
    posts,
    handleEdit,
    editTitle,
    setEditTitle,
    editAuthors,
    setEditAuthors,
    editJournaltype,
    setEditJournaltype,
    editTopic,
    setEditTopic,
    editIssn,
    setEditIssn,
    editLink,
    setEditLink,
    editPolicy,
    setEditPolicy,
    editDataavail,
    setEditDataavail,
    editDatashared,
    setEditDatashared,
    editPeerreview,
    setEditPeerreview,
    editEnforced,
    setEditEnforced,
    editEvidence,
    setEditEvidence,
    dispatch,
  } = useGlobalContext();
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  useEffect(() => {
    if (post) {
      dispatch({
        type: 'EDIT_TITLE',
        payload: post.title,
      });
      dispatch({
        type: 'EDIT_AUTHORS',
        payload: post.authors,
      });
      dispatch({
        type: 'EDIT_JOURNALTYPE',
        payload: post.journaltype,
      });
      dispatch({
        type: 'EDIT_TOPIC',
        payload: post.topic,
      });
      dispatch({
        type: 'EDIT_ISSN',
        payload: post.issn,
      });
      dispatch({
        type: 'EDIT_LINK',
        payload: post.link,
      });
      dispatch({
        type: 'EDIT_POLICY',
        payload: post.policy,
      });
      dispatch({
        type: 'EDIT_DATAAVAIL',
        payload: post.dataavail,
      });
      dispatch({
        type: 'EDIT_DATASHARED',
        payload: post.datashared,
      });
      dispatch({
        type: 'EDIT_PEERREVIEW',
        payload: post.peerreview,
      });
      dispatch({
        type: 'EDIT_ENFORCED',
        payload: post.enforced,
      });
      dispatch({
        type: 'EDIT_EVIDENCE',
        payload: post.evidence,
      });
    }
  }, [dispatch, post]);

  return (
    <Container>
      <PolicyContainer>
        {editTitle && (
          <>
            <Head>Edit Journal Policies</Head>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Label>Journal titile</Label>
              <Input
                type='text'
                required
                value={editTitle}
                onChange={(e) =>
                  dispatch({
                    type: 'EDIT_TITLE',
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
                    value={editJournaltype}
                    onChange={(e) =>
                      dispatch({
                        type: 'EDIT_JOURNALTYPE',
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
                    value={editIssn}
                    onChange={(e) =>
                      dispatch({
                        type: 'EDIT_ISSN',
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
                    value={editEvidence}
                    onChange={(e) =>
                      dispatch({
                        type: 'EDIT_EVIDENCE',
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
                    value={editTopic}
                    onChange={(e) =>
                      dispatch({
                        type: 'EDIT_TOPIC',
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
                    value={editLink}
                    onChange={(e) =>
                      dispatch({
                        type: 'EDIT_LINK',
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
                    value={editAuthors}
                    onChange={(e) =>
                      dispatch({
                        type: 'EDIT_AUTHORS',
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
                      value={editPolicy}
                      onChange={(e) =>
                        dispatch({
                          type: 'EDIT_POLICY',
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
                      value={editEnforced}
                      onChange={(e) =>
                        dispatch({
                          type: 'EDIT_ENFORCED',
                          payload: e.target.value,
                        })
                      }
                    >
                      <option value='policy 1'>Yes - before publication</option>
                      <option value='policy 2'>Policy 2</option>
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
                              dispatch({
                                type: 'EDIT_DATAAVAIL',
                                payload: nextChecked,
                              })
                            }
                            checked={editDataavail}
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
                              dispatch({
                                type: 'EDIT_PEERREVIEW',
                                payload: nextChecked,
                              })
                            }
                            checked={editPeerreview}
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
                            onChange={(nextChecked) =>
                              dispatch({
                                type: 'EDIT_SHARED',
                                payload: nextChecked,
                              })
                            }
                            checked={editDatashared}
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

              <FormInputBtn type='submit' onClick={() => handleEdit(post.id)}>
                Submit
              </FormInputBtn>
            </Form>
          </>
        )}
      </PolicyContainer>
    </Container>
  );
};

export default Edit;
