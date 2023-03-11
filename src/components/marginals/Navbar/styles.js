import styled from 'styled-components';

export const Button = styled.button`
  display: none;
  border: none;
  font-size: 20px;
  flex-direction: column;
  cursor: pointer;
  color: #3d9dd9;
  background: transparent;
  @media (max-width: 1032px) {
    display: flex;
  }
`;

export const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #67bc98;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #7b7fda;
  }
`;

export const Nav = styled.div`
  padding: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #1f4690;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 2px 1px 12px 2px #3d9dd9;
`;

export const Logo = styled.img`
  width: 9rem;
  margin-left: 2rem;

@media only screen and  (min-width:578px) and (max-width: 768px) {
  width: 7rem !important;
}

@media only screen and (max-width: 576px) {
  width: 5rem;}

  
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 1032px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.1s ease-in;
    width: 100%;
    gap: 1rem;
    margin-bottom: 0.7rem;
  }
`;

export const Items = styled.li`
  text-decoration: none;
  list-style: none;
  color: white;
  font-weight: 500;
  padding: 0 10px;
  margin: 0 10px;
  cursor: pointer;
  text-transform: capitalize;
  :hover {
    color: #eae3d2;
  }
`;
