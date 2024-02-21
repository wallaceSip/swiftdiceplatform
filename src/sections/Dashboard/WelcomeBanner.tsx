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
  height: 441px; /* Set a fixed height for all banners */
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: ${fadeIn} 0.8s ease forwards;
  min-height: 350px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    min-height: 350px; /* Set a minimum height for mobile */
  }

`;

const Mascot = styled.img`
  width: 250px;
  height: auto;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  color: white;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: white;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
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

export function WelcomeBanner() {
  return (
    <BannerContainer>
      <Mascot src={mascotImage} alt="Mascot" />
      <TextContainer>
        <Title>Welcome to SwiftDice Casino</Title>
        <Description>
          Discover a transparent and decentralized casino experience on Solana, where participants can generate income by contributing to a shared liquidity pool.
        </Description>
      </TextContainer>
    </BannerContainer>
  );
}
