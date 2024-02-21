import React from 'react';
import styled, { keyframes } from 'styled-components';
import mascotImage from '../../public/mascot.png';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
`;


const TransparentButton = styled.button`
  border: 2px solid #D91141;
  border-radius: 15px;
  padding: 8px 16px;
  background: transparent;
  color: #D91141;
  cursor: pointer;
  transition: background .2s ease, color .2s ease;

  &:hover {
    background: #D91141;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 50px;
  }

  & > button {
    border: none;
    border-radius: 15px;
    padding: 8px 16px;
    background: #333;
    color: white;
    cursor: pointer;
    transition: background .2s ease;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    &:hover {
      background: #555;
    }

    @media (max-width: 768px) {
      font-size: 12px;
      padding: 6px 12px;
    }
  }
`;

function MainPage() {
  return (
    <CenteredContainer>
      <Buttons>
        <TransparentButton onClick={() => window.open('https://explorer.gamba.so/platform/ES124JMpsdWZzVEjvcFCBjq4W1AwNU336xZzD5fZ833L', '_blank')}>
          Explorer
        </TransparentButton>
        <TransparentButton onClick={() => window.open('https://t.me/SwiftDice', '_blank')}>
          Telegram
        </TransparentButton>
        <TransparentButton onClick={() => window.open('https://x.com/SwiftDiceCom', '_blank')}>
          X.com
        </TransparentButton>
      </Buttons>
    </CenteredContainer>
  );
}

export default MainPage;
