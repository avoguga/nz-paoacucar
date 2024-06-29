import { sg } from 'presentation/styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const TitleMsg = styled.h3`
  width: 500px;
  font-size: 26px;
  color: #5d280d;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const InputContainerTitle = styled.h4`
  color: #6d4702;
  font-size: 26px;
`;

export const Input = styled.input`
  background-color: #f9b515;
  width: 559px;
  font-size: 26px;
  height: 39px;
  text-align: center;
  ::placeholder {
    color: #b07600;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
  color: #5d280d;
  font-size: 37px;
  font-weight: bold;
  img {
    width: 20px;
    height: 20px;
  }
`;

export const Footer = styled.div`
  display: flex;
  gap: 6rem;
`;
export const InputLabel = styled.input`
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid #5d280d;
  border-radius: 50%;
  display: grid;
  place-content: center;
  transition: background-color 0.1s ease-in-out, border-color 0.1s ease-in-out;

  &::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.1s ease-in-out;
    box-shadow: inset 1em 1em #5d280d; /* Cor marrom */
  }

  &:checked::before {
    transform: scale(1);
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9b515;
  padding: 5px 10px;
  border-radius: 8px;
  gap: 10px;

  label {
    font-size: 24px;
    color: ${sg.colors.textColors.colorTextDefault};
  }
`;

// third steps

export const VideoSection = styled.div`
  width: 100%;
  max-width: 800px;

  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;
