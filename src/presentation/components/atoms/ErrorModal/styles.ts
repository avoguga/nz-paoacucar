import styled from 'styled-components';
import { sg } from 'presentation/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${sg.colors.backgroundColors.colorBackgroundSolo};
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleMsg = styled.h2`
  color: ${sg.colors.textColors.colorTextDefault};
  text-align: center;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Button = styled.button`
  background-color: ${sg.colors.textColors.colorTextDefault};
  color: white;
  border: none;
  height: 54px;
  width: 30%;
  padding: 10px 20px;
  text-align: center;
  margin: 10px;
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;

  &:hover {
    background-color: ${sg.colors.textColors.colorTextNeutral};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const InputContainerTitle = styled.h3`
  color: ${sg.colors.textColors.colorTextDefault};
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: 10px;
  border: 1px solid ${sg.colors.textColors.colorTextDefault};
  border-radius: 5px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  flex-direction: column;

  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: ${sg.colors.backgroundColors.colorBackgroundFieldTextGeneral};
  padding: 20px;
  border-radius: 5px;
  width: 600px;
  height: 30%;
  max-width: 90%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  align-items: center;
  position: relative;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: 20px;
`;

export const ErrorList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ErrorItem = styled.li`
  color: red;
  margin-bottom: 10px;
  font-size: 24px;
`;
