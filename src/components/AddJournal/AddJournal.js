/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
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

function AddJournal() {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };
  return (
    <Container>
      <PolicyContainer>
        <Head>Create Journal Policies</Head>
        <Form>
          <Label>Journal titile</Label>
          <Input type='text' required />
          <FirstDiv>
            <div>
              <Label>Domain</Label>
              <Input type='text' required />
            </div>
            <div>
              <Label>Source</Label>
              <Input type='text' required />
            </div>
            <div>
              <Label>Authors</Label>
              <Input type='text' required />
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
                <Select>
                  <option value='policy 1'>Policy 1</option>
                  <option value='policy 2'>Policy 2</option>
                  <option value='policy 3'>Policy 3</option>
                </Select>
              </div>
              <div>
                <Label>Enforced:</Label>
                <Select>
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
                        onChange={handleChange}
                        checked={checked}
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
                        onChange={handleChange}
                        checked={checked}
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
                        onChange={handleChange}
                        checked={checked}
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
            <Label style={{ marginTop: '0px' }}>Enforced Evidence</Label>
            <Input primary type='text' required />
          </Div>
        </Form>
      </PolicyContainer>
    </Container>
  );
}

export default AddJournal;
