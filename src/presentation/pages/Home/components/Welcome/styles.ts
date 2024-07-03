import { sg } from 'presentation/styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WelcomeField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${sg.colors.textColors.colorTextDefault};
  width: 25%;
  p {
    font-size: 26px;
    letter-spacing: -0.49px;
    text-align: center;
  }
  h1 {
    font: 51px;

    font-weight: 700;
    margin-bottom: 5px;
  }
`;

export const Logo = styled.img`
  width: 330px;
  height: 330px;
  object-fit: contain;
`;

export const ArrowButton = styled.button`
  background-color: #5b2913;
  border: none;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute; /* Adjust as needed */
  top: 150px; /* Adjust as needed */
  left: 150px; /* Adjust as needed */

  svg path {
    fill: white;
  }
`;
