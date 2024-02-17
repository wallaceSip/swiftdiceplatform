import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  background: linear-gradient(to right, #FF2400, #FF8C00, #EDFF21);
  border-radius: 10px;
  padding: 20px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Mascot = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;

  & > button {
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    background: #ffffffdf;
    transition: background .2s ease;
    &:hover {
      background: white;
    }
    color: black;
    cursor: pointer;
  }
`;

export function WelcomeBanner() {
  return (
    <BannerContainer>
      <Mascot src="/mascot.png" alt="Mascot" />
      <h1>Welcome SwiftDice Casino 👋</h1>
      <p>
        A fair and decentralized casino on Solana. By the creators of SwiftCash.
      </p>
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
