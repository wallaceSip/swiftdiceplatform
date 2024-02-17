import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframe for fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled component for the banner container
const BannerContainer = styled.div`
  background: linear-gradient(to right, #4f004f, #760076, #4f004f),
              url('/assets/brazilbanner.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: ${fadeIn} 0.8s ease forwards;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

// Styled component for the text container
const TextContainer = styled.div`
  flex: 1;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

// Styled components for title, description, and buttons remain the same
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

export function TokenListingBanner() {
  return (
    <BannerContainer>
      <TextContainer>
        <Title>New Token Listings Announcement 🚀</Title>
        <Description>
          We have just Listed BRZ (Brazilian Coin) as a play token!
        </Description>
        <Buttons>
          <button onClick={() => window.open('https://example.com', '_blank')}>
            Learn More
          </button>
        </Buttons>
      </TextContainer>
    </BannerContainer>
  );
}
