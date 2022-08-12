import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #efeff0;
  padding-bottom: 3%;
`;

export const JContainer = styled.div`
  display: grid;
  width: 60%;
  margin: 0px auto 0px auto;
  // margin-left: 100px;
  gap: 10px;
  @media (max-width: 1300px) {
    width: 70%;
    margin-left: 80px;
  }
  @media (max-width: 1000px) {
    width: 70%;
    margin-left: 50px;
  }
  @media (max-width: 700px) {
    margin: 0px auto 0px auto;
    width: 90%;
  }
`;

export const Head = styled.div`
  margin: 100px auto 0px;
  font-size: 2rem;
  color: #ec8d20;
  @media (max-width: 1000px) {
    font-size: 1.6rem;
  }
  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

export const Box = styled.div`
  display: grid;
  gap: 15px;
`;

export const Preview = styled.div`
  display: grid;
  background-color: #ffffff;
  padding: 23px;
`;

export const Authors = styled.div`
  display: flex;
  gap: 5px;
`;

export const Description = styled.div`
  display: flex;
  gap: 5px;
`;

export const Head2 = styled.h1`
  font-size: 1.3rem;
  width: 100%;
  color: ${(props) => (props.primary ? '#7D7A76' : '#EC8D20')};
  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
  @media (max-width: 700px) {
    font-size: 1rem;
    width: 100%;
  }
`;

export const Head3 = styled.h1`
  font-size: 1rem;
  color: ${(props) => (props.secondary ? '#7D7A76' : '#504D4D')};
  @media (max-width: 1000px) {
    font-size: 0.9rem;
  }
  @media (max-width: 700px) {
    font-size: 0.8rem;
  } ;
`;

export const Search = styled.div`
  width: 40%;
  position: relative;
  margin: 0px auto 0px auto;
  display: flex;
`;

export const SearchTerm = styled.input`
  width: 100%;
  border: 3px solid #e48900;
  border-right: none;
  padding: 15px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
`;

export const SearchButton = styled.button`
  width: 40px;
  height: 36px;
  border: 1px solid #e48900;
  background: #e48900;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
`;
