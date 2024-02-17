import React from 'react';
import styled, { keyframes } from 'styled-components';
import mascotImage from '../../../public/mascot.png';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const BannerContainer = styled.div`
  background: linear-gradient(to right, #4f004f, #760076, #4f004f);
  border-radius: 20px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: ${fadeIn} 0.8s ease forwards;
`;

const Mascot = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: white;
  text-align: center;
`;

const Description = styled.p`
  font-size: 20px;
  text-align: center;
  color: white;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;

  & > button {
    border: none;
    border-radius: 15px;
    padding: 12px 24px;
    background: #333;
    color: white;
    cursor: pointer;
    transition: background .2s ease;
    &:hover {
      background: #555;
    }
  }
`;

export function WelcomeBanner() {
  return (
    <BannerContainer>
      <Mascot src={mascotImage} alt="Mascot" />
      <Title>Welcome to SwiftDice Casino 👋</Title>
      <Description>
        Experience a fair and decentralized casino on Solana, brought to you by the creators of SwiftCash.
      </Description>
      <Buttons>
        <button onClick={() => window.open('https://v2.gamba.so/', '_blank')}>
          🚀 Add Liquidity
        </button>
        <button onClick={() => window.open('https://t.me/YourTelegramAccount', '_blank')}>
          💬 Telegram
        </button>
        <button onClick={() => window.open('https://twitter.com/YourTwitterAccount', '_blank')}>
          🐦 Twitter
        </button>
      </Buttons>
    </BannerContainer>
  );
}
