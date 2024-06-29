import styled from 'styled-components';
import { sg } from 'presentation/styles';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e4ab57;
  gap: 10rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5rem;
  right: 6rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  img {
    width: 2rem;
    height: 2rem;
  }
`;

export const Logo = styled.img`
  margin-bottom: 15px;
  width: 330px;
  height: 330px;
`;

export const Image = styled.img`
  width: 400px;
  height: 230px;
  height: auto;
  display: block;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  width: 530px;
  font-size: 26px;
  color: ${sg.colors.textColors.colorTextDefault};
  margin: 50px;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
`;

export const OptionsTitle = styled.h3`
  color: #5d280d;
  font-size: 40px;
`;

export const OptionsButtons = styled.div`
  display: flex;
  gap: 3rem;
`;

export const OptionsButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #dc9327;
  width: 260px;
  height: 350px;
  font-size: 37px;
  color: #5d280d;
  gap: 50px;

  img {
    width: 200px;
    height: 200px;
  }
`;

export const CasaPaoAcucar = styled.div`
  position: absolute;
  top: 5rem;
  left: 6rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  img {
    width: 2rem;
    height: 2rem;
  }
`;
