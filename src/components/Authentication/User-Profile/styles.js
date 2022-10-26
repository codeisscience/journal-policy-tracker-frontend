import styled from 'styled-components';

export const HeadingContainer = styled.div`
  width: auto;
`;

export const Heading = styled.h1`
  text-align: start !important;
  font-size: 1.8rem;
  color: #ec8d20;
`;

export const P = styled.p`
  font-size: 0.8rem;
  margin: 0.1em;
  opacity: 0.8;
  color: #6c757d;
`;

export const H1 = styled.h1`
  font-size: 1.3rem;
`;

export const H4 = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
`;

export const CTXH4 = styled.h4`
  font-size: 18px;
  margin: 0.5em 0 0.2em 0;
  color: #333;
`;

export const ProfileGridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 40%;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  row-gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProfileImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ProfileImageCircle = styled.div`
  background-color: #333;
  width: 150px;
  height: 150px;
  clip-path: circle();
`;

export const ProfileCTXText = styled.h1`
  font-size: 1.8rem;
`;

export const ProfileCtxBadge = styled.div`
  span {
    background-color: #238636;
    padding: 0.5em 3em;
    text-align: center;
    border-radius: 5px;
    color: white;
    font-size: 14px;
  }
`;

export const ProfileCtxUser = styled.div`
  color: #ec8d20;
`;

export const ProfileDetailsWrapper = styled.h1`
  width: 100%;
  margin: 1em 0;
  text-align: start !important;
`;

export const ProfileDetails = styled.h1`
  color: #333;
  background-color: #e9ecef;
  padding: 0.2em 0.3em;
  margin-bottom: 0.3em;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
`;

export const Card = styled.div`
  background-color: white;
  text-align: center;
  font-family: arial;
  padding: 1em;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 4%), 0 1px 2px 0 rgb(0 0 0 / 5%);
`;

export const Title = styled.p`
  color: grey;
  font-size: 18px;
`;

export const ButtonLogout = styled.button`
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
`;

export const ProfileGridInnerContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 20px;
  row-gap: 10px;
`;
