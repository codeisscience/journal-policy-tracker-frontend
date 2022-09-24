import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  left: 0;
  bottom: 0;
  text-align: center;
`;

export const SecondaryContainer = styled.div`
  display: grid;
  width: 100%;
  background-color: #16213e;
  justify-content: center;
`;

export const UpperDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  padding-top: 2rem;
  gap: 8rem;
  @media (max-width: 990px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    gap: 1.5rem 10rem;
  }
  @media (max-width: 484px) {
    grid-template-columns: repeat(1, minmax(100px, 1fr));
    gap: 1.5rem 10rem;
  }
`;

export const Logo = styled.img`
  width: 4rem;
  height: auto;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Heading2 = styled.h1`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #e8e9ea;
`;

export const NoStyleNav = styled.a`
    no-underline
    mt-2
`;

export const Heading3 = styled.p`
  font-size: 0.875rem;
  color: #bdc3c7;
  margin-bottom: 0.5rem;
`;

export const SocialDiv = styled.div`
  display: flex;
  gap: 5px;
`;

export const SocialLogo = styled.img`
  width: 100%;
`;

export const LowerDiv = styled.div`
  background: #16213e;
  color: #fff;
  text-align: center;
  padding: 3rem 0rem 3rem 0;
`;
