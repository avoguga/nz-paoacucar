import { sg } from 'presentation/styles';
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background-color: rgba(220, 147, 39, 0.9);
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ModalHeader = styled.div`
  margin-bottom: 2rem;
`;

export const ModalTitle = styled.h2`
  color: #5d280d;
  margin: 0;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Input = styled.input`
  background-color: #f9b515;
  border: none;
  border-radius: 4px;
  height: 50px;
  margin-bottom: 1rem;
  padding: 0 20px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  width: 577px;
  color: #5d280d;
  ::placeholder {
    color: rgba(93, 40, 13, 0.4);
  }
`;

export const TextArea = styled.textarea`
  background-color: #f9b515;
  border: none;
  border-radius: 4px;
  padding: 20px;
  height: 530px;
  font-size: 25px;
  resize: none;
  width: 577px;
  color: #5d280d;
  ::placeholder {
    color: rgba(93, 40, 13, 0.4);
  }
`;

export const CharCounter = styled.div`
  text-align: right;
  color: #5d280d;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const Button = styled.button<any>`
  display: flex;
  width: ${({ width }) =>
    width || '28.125rem'}; // Set default width or use provided width
  height: ${({ height }) =>
    height || '3.75rem'}; // Set default height or use provided height
  background-color: ${(props) =>
    props.background ||
    sg.colors.backgroundColors
      .colorBackgroundButtonOne}; // Use provided background or default
  color: ${sg.colors.textColors
    .colorTextDefault}; // Use provided text color or default
  font-size: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  align-items: center;
  justify-content: space-between; // Aligns children (text and img) on opposite sides
  padding: 0 1rem; // Add padding on both sides to ensure spacing

  img {
    margin-left: auto; // Pushes the image to the far right
    width: 24px;
    height: 24px;
  }

  span {
    flex: 1; // Allows the span to take available space pushing img to the right
    text-align: center; // Ensures the text is centered within the space
    justify-content: center;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;
