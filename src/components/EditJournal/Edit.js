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
// import { FormInputBtn } from '../Authentication/styles';

const Edit = ({
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
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditAuthors(post.authors);
      setEditJournaltype(post.journalType);
      setEditTopic(post.topic);
      setEditIssn(post.issn);
      setEditLink(post.link);
      setEditPolicy(post.policy);
      setEditDataavail(post.dataavail);
      setEditDatashared(post.datashared);
      setEditPeerreview(post.peerreview);
      setEditEnforced(post.enforced);
      setEditEvidence(post.evidence);
    }
  }, [
    post,
    setEditTitle,
    setEditAuthors,
    setEditJournaltype,
    setEditTopic,
    setEditIssn,
    setEditLink,
    setEditPolicy,
    setEditDataavail,
    setEditDatashared,
    setEditPeerreview,
    setEditEnforced,
    setEditEvidence,
  ]);

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
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <FirstDiv>
                <div>
                  <Label>Journal Type</Label>
                  <Input
                    type='text'
                    required
                    value={editJournaltype}
                    onChange={(e) => setEditJournaltype(e.target.value)}
                  />
                </div>
                <div>
                  <Label>ISSN Number</Label>
                  <Input
                    type='text'
                    required
                    value={editIssn}
                    onChange={(e) => setEditIssn(e.target.value)}
                  />
                </div>
                <div>
                  <Label>Enforced Evidence</Label>
                  <Input
                    type='text'
                    required
                    value={editEvidence}
                    onChange={(e) => setEditEvidence(e.target.value)}
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
                    onChange={(e) => setEditTopic(e.target.value)}
                  />
                </div>
                <div>
                  <Label>Source</Label>
                  <Input
                    type='text'
                    required
                    value={editLink}
                    onChange={(e) => setEditLink(e.target.value)}
                  />
                </div>
                <div>
                  <Label>Authors</Label>
                  <Input
                    type='text'
                    required
                    value={editAuthors}
                    onChange={(e) => setEditAuthors(e.target.value)}
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
                    <Select value={editPolicy} onChange={(e) => setEditPolicy(e.target.value)}>
                      <option value='policy 1'>Policy 1</option>
                      <option value='policy 2'>Policy 2</option>
                      <option value='policy 3'>Policy 3</option>
                    </Select>
                  </div>
                  <div>
                    <Label>Enforced:</Label>
                    <Select value={editEnforced} onChange={(e) => setEditEnforced(e.target.value)}>
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
                            onChange={(nextChecked) => setEditDataavail(nextChecked)}
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
                            onChange={(nextChecked) => setEditPeerreview(nextChecked)}
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
                            onChange={(nextChecked) => setEditDatashared(nextChecked)}
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
              <button type='submit' onClick={() => handleEdit(post.id)}>
                Submit
              </button>
              {/* {!isPending && <FormInputBtn>Add blog</FormInputBtn>}
              {isPending && <FormInputBtn>Adding blog...</FormInputBtn>} */}
            </Form>
          </>
        )}
      </PolicyContainer>
    </Container>
  );
};

export default Edit;
