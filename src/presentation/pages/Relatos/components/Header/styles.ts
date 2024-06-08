import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 95%;
  padding: 50px 50px;
`;
export const Logo = styled.img`
  display: flex;
  align-items: center;
  width: 350px;
`;

export const HomeIcon = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  font-size: 20px;
  img {
    width: 70px;
    height: 70px;
  }
`;
